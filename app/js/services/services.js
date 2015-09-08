"use strict";

domoWaveZApp.factory("Services", function ($http) {
    var API_URI = '/ZAutomation/api/v1/';

    return {
        devices: function () {
            return $http.get(API_URI + 'devices');
        }
    };

});
