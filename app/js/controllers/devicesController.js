"use strict";

domoWaveZApp.controller("devicesController", function ($scope, $translate, $translatePartialLoader, Services) {
    Services.devices()
        .success(function (resp) {
        $scope.devices = resp.data.devices;
        })
        .error(function (resp) {

        });

    //Translations management
    $translatePartialLoader.addPart('devices');
    $translate.refresh();

    /* Functions for devices */

    /* Doorlock actions */
    /* Open doorlock */
    $scope.doorlockOpen = function (deviceId) {

    };
    /* Close doorlock */
    $scope.doorlockClose = function (deviceId) {

    };

    /* Thermostat actions */
    /* Set thermostat mode */
    $scope.thermostatSetMode = function (deviceId, mode) {

    };

    /* Set thermostat temperature */
    $scope.thermostatSetTemp = function (deviceId, temperature) {

    };

    /* Fan actions */

    /* Meter actions */

    /* Switch binary actions */
    $scope.switchBinaryOn = function (deviceId) {

    };

    $scope.switchBinaryOff = function (deviceId) {

    };

    $scope.switchBinaryUpdate = function (deviceId) {

    };

    /* Switch multilevel actions */
    $scope.switchMultilevelOn = function (deviceId) {

    };

    $scope.switchMultilevelOff = function (deviceId) {

    };

    $scope.switchMultilevelMin = function (deviceId) {

    };

    $scope.switchMultilevelMax = function (deviceId) {

    };

    $scope.switchMultilevelUpdate = function (deviceId) {

    };

    $scope.switchMultilevelExact = function (deviceId, level) {

    };

    /* Sensor binary actions */
    $scope.sensorBinaryUpdate = function (deviceId) {

    };

    /* Sensor multilevel actions */
    $scope.sensorMultilevelUpdate = function (deviceId) {

    };

    /* Switch toggle actions */
    $scope.switchToggleOn = function (deviceId) {

    };

});