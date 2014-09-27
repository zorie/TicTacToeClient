'use strict';

ticTacToeApp.factory('UsersResource', function($resource, config) {
    var usersApi = config.ROOT_URL + 'api/account';

    return {
        register: $resource(usersApi + 'register'),
        login: $resource(usersApi + 'login'),
        logout: $resource(usersApi + 'logout')
    }
});