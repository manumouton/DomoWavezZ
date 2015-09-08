"use strict";

domoWaveZApp.controller("devicesController", function ($scope, $translate, $translatePartialLoader, Services) {
    Services.devices().success(function (resp) {
        $scope.devices = resp.data.devices;
    });

    //Translations management
    $translatePartialLoader.addPart('devices');
    $translate.refresh();
});