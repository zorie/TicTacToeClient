'use strict';

ticTacToeApp.controller('GameCtrl', function GameCtrl($scope, $routeParams, $timeout, $location, data, identity) {
    if (!identity.isAuthenticated()) {
        $location.path('/');
        return;
    }

    $scope.statuses = ['WaitingForSecondPlayer', 'TurnX', 'TurnO', 'WonByX', 'WonByO', 'Draw'];
    $scope.identity = identity;

    function getGameStatus() {
        if ($location.path().indexOf('/game/') === -1) {
            return;
        }

        data.getGameStatus($routeParams.id)
            .then(function(data) {
                $scope.game = data;

                if (data.State == 0 || data.State == 1 || data.State == 2) {
                    $timeout(getGameStatus, 2000);
                }
            }, function(err) {
                console.log(err);
            });
    }

    getGameStatus();

    $scope.play = function(row, col) {
        data.makePlay($scope.game.Id, row, col)
            .then(function(response) {
                getGameStatus($routeParams.id);
            });
    };
});