ticTacToeApp.factory('data', function($http, $q, config, authorization) {

    function getGames(filter) {
        var deferred = $q.defer();

        var authHeaders = authorization.getAuthorizationHeader();

        $http.get(config.ROOT_URL + '/api/games' + filter, {headers: authHeaders})
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(err) {
                deferred.reject(err);
            });

        return deferred.promise;
    }

    return {
        getMyGames: function() {
            return getGames('/mygames');
        },
        getAllGames: function() {
            return getGames('/all');
        },
        createGame: function(name) {
            var deferred = $q.defer();

            var authHeaders = authorization.getAuthorizationHeader();

            $http.post(config.ROOT_URL + '/api/games/create?name=' + name, {name: name}, {headers: authHeaders})
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        },
        getHighScores: function() {
            var deferred = $q.defer();

            $http.get(config.ROOT_URL + '/api/scores/all')
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        },
        joinGame: function(id) {
            var deferred = $q.defer();

            var authHeaders = authorization.getAuthorizationHeader();

            $http.post(config.ROOT_URL + '/api/games/join?id=' + id, {}, {headers: authHeaders})
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        },
        getGameStatus: function(id) {
            var deferred = $q.defer();

            var authHeaders = authorization.getAuthorizationHeader();

            $http.get(config.ROOT_URL + '/api/games/status?gameId=' + id, {headers: authHeaders})
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        },
        makePlay: function(gameId, row, col) {
            var deferred = $q.defer();

            var authHeaders = authorization.getAuthorizationHeader();

            $http.post(config.ROOT_URL + '/api/games/play', {gameId: gameId, row: row, col: col}, {headers: authHeaders})
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        },
        getUsers: function() {
            var deferred = $q.defer();

            $http.get(config.ROOT_URL + '/api/users/all')
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        }
    }
});