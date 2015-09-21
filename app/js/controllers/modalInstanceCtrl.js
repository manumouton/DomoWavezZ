"use strict";

domoWaveZApp.controller('modalController', function ($scope, $modalInstance, httpObject) {
    $scope.message = httpObject.message;
    $scope.code = httpObject.code;
    $scope.error = httpObject.error;

    $scope.ok = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});