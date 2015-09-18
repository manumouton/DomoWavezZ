"use strict";

domoWaveZApp.controller("modulesController", function ($scope, $translate, $translatePartialLoader, ModulesService) {
    ModulesService.fetchAll()
        .then(function (resp) {
            $scope.modules = resp.data;
        });

    //Translations management
    $translatePartialLoader.addPart('modules');
    $translate.refresh();
});