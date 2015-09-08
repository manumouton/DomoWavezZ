'use strict';

//Define the angularjs module for the app
var domoWaveZApp = angular.module('domoWaveZApp', ['ngRoute', 'ngSanitize', 'pascalprecht.translate', 'angularTranslateApp']);

domoWaveZApp.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller : 'homeController'
        })
        .when('/devices', {
            templateUrl: 'partials/devices.html',
            controller: 'devicesController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});

angular.module('angularTranslateApp', ['pascalprecht.translate'])
    .config(function ($translateProvider, $translatePartialLoaderProvider) {
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '/translation/{lang}/{part}.json'
        });

        $translateProvider.useSanitizeValueStrategy('sanitize');

        $translateProvider.preferredLanguage('fr-FR');
    });
