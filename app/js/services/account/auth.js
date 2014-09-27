
ticTacToeApp.factory('auth', function($http, $q, config, identity, authorization) {
    var usersApi = config.ROOT_URL + '/api/users';

    return {
        register: function(regInfo) {
            var deferred = $q.defer();

            $http.post(usersApi + '/register', regInfo)
                .then(function() {
                    deferred.resolve();
                }, function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        },
        login: function(userCredentials) {
            var deferred = $q.defer();

            userCredentials['grant_type'] = 'password';
            $http.post(usersApi + '/login', 'username=' + userCredentials.username + '&password=' + userCredentials.password + '&grant_type=password', { headers: {'Content-Type': 'application/x-www-form-urlencoded'} })
                .success(function(response) {
                    if (response['access_token']) {
                        identity.setCurrentUser(response);
                        identity.setCurrentUsername(userCredentials.username);
                        deferred.resolve(true);
                    }
                    else {
                        deferred.resolve(false);
                    }
                });

            return deferred.promise;
        },
        logout: function() {
            var deferred = $q.defer();

            var authHeaders = authorization.getAuthorizationHeader();

            $http.post(usersApi + '/logout', {}, {headers: authHeaders})
                .success(function() {
                    identity.setCurrentUser(undefined);
                    identity.setCurrentUsername(undefined);
                    deferred.resolve();
                })
                .error(function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        },
        isAuthenticated: function() {
            if (identity.isAuthenticated()) {
                return true;
            }
            else {
                return $q.reject('not authorized');
            }
        }
    }
});