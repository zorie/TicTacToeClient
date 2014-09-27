'use strict';

ticTacToeApp.controller('HomeCtrl', function($scope, author, identity) {
    $scope.identity = identity;
    $scope.author = author;
});