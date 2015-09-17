'use strict';

//Define the angularjs module for the app
var domoWaveZApp = angular
    .module('domoWaveZApp',
    ['ngRoute',
        'ngSanitize',
        'ngAnimate',
        'ui.bootstrap',
        'pascalprecht.translate',
        'angularTranslateApp'
    ])
    .constant("CONFIG", {
        "APP_NAME": "DomoWaveZ",
        "APP_VERSION": "0.0.1",
        "API_URI": "/ZAutomation/api/v1/",
        "DATA_URI": "data/"
    });

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
        .when('/locations', {
            templateUrl: 'partials/locations.html',
            controller: 'locationsController'
        })
        .when('/namespaces', {
            templateUrl: 'partials/namespaces.html',
            controller: 'namespacesController'
        })
        .when('/notifications', {
            templateUrl: 'partials/notifications.html',
            controller: 'notificationsController'
        })
        .when('/profiles', {
            templateUrl: 'partials/profiles.html',
            controller: 'profilesController'
        })
        .when('/modules', {
            templateUrl: 'partials/modules.html',
            controller: 'modulesController'
        })
        .when('/instances', {
            templateUrl: 'partials/instances.html',
            controller: 'instancesController'
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

        $translateProvider.useSanitizeValueStrategy('escape');

        $translateProvider.preferredLanguage('fr-FR');
    });
