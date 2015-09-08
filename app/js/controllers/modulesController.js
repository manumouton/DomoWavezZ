"use strict";

domoWaveZApp.controller("modulesController", function ($scope, $translate, $translatePartialLoader, Services) {
    Services.modules().success(function (resp) {
        $scope.modules = resp.data;
    });

    //Translations management
    $translatePartialLoader.addPart('modules');
    $translate.refresh();
});