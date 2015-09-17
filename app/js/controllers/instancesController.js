"use strict";

domoWaveZApp.controller("instancesController", function ($scope, $translate, $translatePartialLoader, InstancesService) {
    InstancesService.fetchAll()
        .success(function (resp) {
            $scope.instances = resp.data;
        })
        .error(function (resp) {
            //TODO
        });

    //Translations management
    $translatePartialLoader.addPart('instances');
    $translate.refresh();
});