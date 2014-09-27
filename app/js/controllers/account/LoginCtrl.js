'use strict';

ticTacToeApp.controller('LoginCtrl', function LoginCtrl($scope, $location, auth, identity) {
    $scope.login = function login(userInfo) {
        auth.login(userInfo).then(function() {
            $location.path('/');
        });
    };
});