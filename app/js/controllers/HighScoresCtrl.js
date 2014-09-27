'use strict';

ticTacToeApp.controller('HighScoresCtrl', function($scope, data) {
    data.getHighScores().then(function(data) {
        $scope.highScores = data;
    });
});