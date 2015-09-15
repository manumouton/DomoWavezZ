"use strict";

/**
 * Razberry API service
 */
domoWaveZApp.constant('API_URI', '/ZAutomation/api/v1/');

domoWaveZApp.factory("Services", function ($http, API_URI) {
    return {
        devices: function () {
            return $http.get(API_URI + 'devices');
        },
        locations: function () {
            return $http.get(API_URI + 'locations');
        },
        namespaces: function () {
            return $http.get(API_URI + 'namespaces');
        },
        notifications: function () {
            return $http.get(API_URI + 'notifications');
        },
        profiles: function () {
            return $http.get(API_URI + 'profiles');
        },
        instances: function () {
            return $http.get(API_URI + 'instances');
        },
        modules: function () {
            return $http.get(API_URI + 'modules');
        }
    };
});

/**
 * Templates service providing different items templates stored in json file
 */
domoWaveZApp.constant('DATA_URI', 'data/');

domoWaveZApp.factory("TemplatesServices", function ($http, DATA_URI) {
    return {
        devicesTemplates: function () {
            return $http.get(DATA_URI + 'devicesTemplates.json');
        }
    };
});
