ticTacToeApp.controller('UsersCtrl', function UsersCtrl($scope, $location, data, identity) {
    data.getUsers()
        .then(function(response) {
            $scope.allUsers = response;
        });
});
