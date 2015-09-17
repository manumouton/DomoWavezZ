"use strict";

domoWaveZApp.controller("modulesController", function ($scope, $translate, $translatePartialLoader, ModulesService) {
    ModulesService.fetchAll()
        .success(function (resp) {
            $scope.modules = resp.data;
        })
        .error(function (resp) {
            //TODO
        });

    //Translations management
    $translatePartialLoader.addPart('modules');
    $translate.refresh();
});