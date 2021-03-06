"use strict";

domoWaveZApp.controller("instancesController", function ($scope, $translate, $translatePartialLoader, InstancesService) {
    InstancesService.fetchAll()
        .then(function (resp) {
            $scope.instances = resp.data;
        });

    //Translations management
    $translatePartialLoader.addPart('instances');
    $translate.refresh();
});