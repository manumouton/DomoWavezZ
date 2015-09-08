"use strict";

domoWaveZApp.controller("instancesController", function ($scope, $translate, $translatePartialLoader, Services) {
    Services.instances().success(function (resp) {
        $scope.instances = resp.data;
    });

    //Translations management
    $translatePartialLoader.addPart('instances');
    $translate.refresh();
});