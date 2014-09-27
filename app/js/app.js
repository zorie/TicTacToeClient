'use strict';

// Declare app level module which depends on filters, and services
var ticTacToeApp = angular.module('ticTacToeApp', ['ngRoute', 'ngCookies', 'ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '../templates/partials/home.html',
                controller: 'HomeCtrl'
            })
            .when('/play', {
                templateUrl: '../templates/partials/play.html',
                controller: 'PlayCtrl'
            })
            .when('/how-to-play', {
                templateUrl: '../templates/partials/how-to-play.html',
                controller: 'HowToPlayCtrl'
            })
            .when('/high-scores', {
                templateUrl: '../templates/partials/high-scores.html',
                controller: 'HighScoresCtrl'
            })
            .when('/login', {
                templateUrl: '../templates/partials/account/login.html',
                controller: 'LoginCtrl'
            })
            .when('/register', {
                templateUrl: '../templates/partials/account/register.html',
                controller: 'RegisterCtrl'
            })
            .when('/game/:id', {
                templateUrl: '../templates/partials/game/game.html',
                controller: 'GameCtrl'
            })
            .when('/creategame', {
                templateUrl: '../templates/partials/game/create-game.html',
                controller: 'CreateGameCtrl'
            })
            .when('/users', {
                templateUrl: '../templates/partials/users.html',
                controller: 'UsersCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    })
    .constant('author', 'Zdravko Georgiev');