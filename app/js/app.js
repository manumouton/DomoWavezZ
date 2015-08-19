'use strict';

var domoWaveZApp = angular.module('domoWaveZApp', ['ngRoute']);

domoWaveZApp.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller : 'homeController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
