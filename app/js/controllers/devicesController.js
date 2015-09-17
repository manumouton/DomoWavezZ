"use strict";

domoWaveZApp.controller("devicesController", function ($scope, $translate, $translatePartialLoader, DevicesService) {
    DevicesService.fetchAll()
        .success(function (resp) {
            $scope.devices = resp.data.devices;
        })
        .error(function (resp) {
            //TODO
        });

    /* Functions for devices */
    /* Doorlock actions */
    /* Open doorlock */
    $scope.doorlockOpen = function (deviceId) {
        DevicesService.open(deviceId)
            .success(function (resp) {
                //TODO
            })
            .error(function (resp) {
                //TODO
            });

    };
    /* Close doorlock */
    $scope.doorlockClose = function (deviceId) {
        DevicesService.close(deviceId)
            .success(function (resp) {
                //TODO
            })
            .error(function (resp) {
                //TODO
            });
    };

    /* Thermostat actions */
    /* Set thermostat mode */
    $scope.thermostatSetMode = function (deviceId, mode) {
        DevicesService.setMode(deviceId, mode)
            .success(function (resp) {
                //TODO
            })
            .error(function (resp) {
                //TODO
            });
    };

    /* Set thermostat temperature */
    $scope.thermostatSetTemp = function (deviceId, temperature) {
        DevicesService.setTemp(deviceId, temperature)
            .success(function (resp) {
                //TODO
            })
            .error(function (resp) {
                //TODO
            });
    };

    /* Fan actions */

    /* Meter actions */

    /* Switch binary actions */
    $scope.switchBinaryOn = function (deviceId) {
        DevicesService.on(deviceId)
            .success(function (resp) {
                //TODO
            })
            .error(function (resp) {
                //TODO
            });
    };

    $scope.switchBinaryOff = function (deviceId) {
        DevicesService.off(deviceId)
            .success(function (resp) {
                //TODO
            })
            .error(function (resp) {
                //TODO
            });
    };

    $scope.switchBinaryUpdate = function (deviceId) {
        DevicesService.update(deviceId)
            .success(function (resp) {
                //TODO
            })
            .error(function (resp) {
                //TODO
            });
    };

    /* Switch multilevel actions */
    $scope.switchMultilevelOn = function (deviceId) {
        DevicesService.on(deviceId)
            .success(function (resp) {
                //TODO
            })
            .error(function (resp) {
                //TODO
            });
    };

    $scope.switchMultilevelOff = function (deviceId) {
        DevicesService.off(deviceId)
            .success(function (resp) {
                //TODO
            })
            .error(function (resp) {
                //TODO
            });
    };

    $scope.switchMultilevelMin = function (deviceId) {
        DevicesService.min(deviceId)
            .success(function (resp) {
                //TODO
            })
            .error(function (resp) {
                //TODO
            });
    };

    $scope.switchMultilevelMax = function (deviceId) {
        DevicesService.max(deviceId)
            .success(function (resp) {
                //TODO
            })
            .error(function (resp) {
                //TODO
            });
    };

    $scope.switchMultilevelUpdate = function (deviceId) {
        DevicesService.update(deviceId)
            .success(function (resp) {
                //TODO
            })
            .error(function (resp) {
                //TODO
            });
    };

    $scope.switchMultilevelExact = function (deviceId, level) {
        DevicesService.exact(deviceId, level)
            .success(function (resp) {
                //TODO
            })
            .error(function (resp) {
                //TODO
            });
    };

    /* Sensor binary actions */
    $scope.sensorBinaryUpdate = function (deviceId) {
        DevicesService.update(deviceId)
            .success(function (resp) {
                //TODO
            })
            .error(function (resp) {
                //TODO
            });
    };

    /* Sensor multilevel actions */
    $scope.sensorMultilevelUpdate = function (deviceId) {
        DevicesService.update(deviceId)
            .success(function (resp) {
                //TODO
            })
            .error(function (resp) {
                //TODO
            });
    };

    /* Switch toggle actions */
    $scope.switchToggleOn = function (deviceId) {
        DevicesService.on(deviceId)
            .success(function (resp) {
                //TODO
            })
            .error(function (resp) {
                //TODO
            });
    };

    //Translations management
    $translatePartialLoader.addPart('devices');
    $translate.refresh();

});