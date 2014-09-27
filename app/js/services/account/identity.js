ticTacToeApp.factory('identity',  function($cookieStore) {
    var cookieStorageUserKey = 'currentApplicationUser';
    var localStorageUsernameKey = 'username';
    var currentUser;

    return {
        getCurrentUser: function() {
            var userFromStorage = $cookieStore.get(cookieStorageUserKey);

            if (userFromStorage) {
                return userFromStorage
            }

            return currentUser;
        },
        setCurrentUser: function(user) {
            if (user) {
                $cookieStore.put(cookieStorageUserKey, user);
            }
            else {
                $cookieStore.remove(cookieStorageUserKey);
            }

            currentUser = user;
        },
        setCurrentUsername: function(username) {
            localStorage.setItem(localStorageUsernameKey, username);
        },
        getCurrentUsername: function() {
            return localStorage.getItem(localStorageUsernameKey);
        },
        isAuthenticated: function() {
            return !!this.getCurrentUser();
        }
    }
});