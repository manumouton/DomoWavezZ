'use strict';

//Define the angularjs module for the app
var domoWaveZApp = angular.module('domoWaveZApp',
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
        "API_URI": "http://admin:admin@192.168.0.7:8083/ZAutomation/api/v1/",
        "DATA_URI": "data/"
    });

domoWaveZApp.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
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

/**
 * Global http interceptor
 */
domoWaveZApp.factory('httpInterceptor', function ($q, $injector) {
        return {
            requestError: function (request) {
                $injector.get('$modal').open({
                    animation: true,
                    controller: 'modalController',
                    templateUrl: 'httpModal.html',
                    resolve: {
                        httpObject: function () {
                            return request;
                        }
                    }
                });
            },
            response: function (response) {
                if (response.status == 200) {
                    return response;
                }
                else {
                    $injector.get('$modal').open({
                        animation: true,
                        controller: 'modalController',
                        templateUrl: 'httpModal.html',
                        resolve: {
                            httpObject: function () {
                                return response;
                            }
                        }
                    });
                }
            },
            // This is the responseError interceptor
            responseError: function (response) {
                $q.reject(response);
                $injector.get('$modal').open({
                    animation: true,
                    controller: 'modalController',
                    templateUrl: 'httpModal.html',
                    resolve: {
                        httpObject: function () {
                            return response;
                        }
                    }
                });
            }
        }
    }
);

domoWaveZApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor')
});

angular.module('angularTranslateApp', ['pascalprecht.translate'])
    .config(function ($translateProvider, $translatePartialLoaderProvider) {
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '/translation/{lang}/{part}.json'
        });

        $translateProvider.useSanitizeValueStrategy('escape');

        $translateProvider.preferredLanguage('fr-FR');
    });
