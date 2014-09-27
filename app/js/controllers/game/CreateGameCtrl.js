ticTacToeApp.controller('CreateGameCtrl', function CreateGameCtrl($scope, $location, data, identity) {
    if (!identity.isAuthenticated()) {
        $location.path('/');
        return;
    }

    $scope.createGame = function(name) {
        data.createGame(name)
            .then(function(response) {
                $location.path('/game/' + response.substr(1, response.length - 2));
            });
    };
});