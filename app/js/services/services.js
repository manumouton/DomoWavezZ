"use strict";

domoWaveZApp.factory("Services", function ($http) {
    var API_URI = '/ZAutomation/api/v1/';

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
