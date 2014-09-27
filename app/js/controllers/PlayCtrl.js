'use strict';

ticTacToeApp.controller('PlayCtrl', function($scope, $location, auth, data, identity) {
    if (!identity.isAuthenticated()) {
        $location.path('/');
        return;
    }

    $scope.identity = identity;

    data.getMyGames().then(function(games) {
        $scope.myGames = games;
    });

    data.getAllGames().then(function(games) {
        $scope.allGames = games;
    });

    $scope.joinGame = function(id) {
        data.joinGame(id)
            .then(function(gameId) {
                $location.path('/game/' + id);
            });
    };


});
