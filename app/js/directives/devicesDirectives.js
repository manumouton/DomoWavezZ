domoWaveZApp.directive('deviceItem', function ($compile, TemplatesServices) {
    var getTemplate = function (devicesTemplates, deviceType) {
        var template = '';

        switch (deviceType) {
            case deviceTypesData.BATTERY.id:
                template = devicesTemplates.battery;
                break;
            case deviceTypesData.DOORLOCK.id:
                template = devicesTemplates.doorlock;
                break;
            case deviceTypesData.THERMOSTAT.id:
                template = devicesTemplates.thermostat;
                break;
            case deviceTypesData.SWITCH_BINARY.id:
                template = devicesTemplates.switchbinary;
                break;
            case deviceTypesData.SWITCH_MULTILEVEL.id:
                template = devicesTemplates.switchmultilevel;
                break;
            case deviceTypesData.SENSOR_BINARY.id:
                template = devicesTemplates.sensorbinary;
                break;
            case deviceTypesData.SENSOR_MULTILEVEL.id:
                template = devicesTemplates.sensormultilevel;
                break;
            case deviceTypesData.SWITCH_TOGGLE.id:
                template = devicesTemplates.switchtoggle;
                break;
        }

        return template;
    };

    var linker = function (scope, element, attrs) {
        TemplatesServices.devicesTemplates().then(function (response) {
            var devicesTemplates = response.data;
            element.html(getTemplate(devicesTemplates, scope.$parent.device.deviceType));
            $compile(element.contents())(scope.$parent);
        });
    };

    return {
        restrict: 'E',
        link: linker,
        scope: {
            content: '='
        }
    };
});