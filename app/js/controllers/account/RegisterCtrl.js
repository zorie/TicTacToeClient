'use strict';

ticTacToeApp.controller('RegisterCtrl', function RegisterCtrl($scope, $location, auth) {
    $scope.register = function register(accountInfo) {
        auth.register(accountInfo)
            .then(function() {
                $location.path('/');
            });
    };
});