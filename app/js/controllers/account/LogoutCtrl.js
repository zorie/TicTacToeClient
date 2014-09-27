'use strict';

ticTacToeApp.controller('LogoutCtrl', function LogoutCtrl($scope, $location, auth, identity) {
    $scope.logout = function() {
        auth.logout()
            .then(function() {
                $location.path('/');
            });
    };
});