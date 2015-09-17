"use strict";

domoWaveZApp.controller("namespacesController", function ($scope, $translate, $translatePartialLoader, NamespacesService) {
    NamespacesService.fetchAll()
        .success(function (resp) {
            $scope.namespaces = resp.data;
        })
        .error(function (resp) {
            //TODO
        });

    //Translations management
    $translatePartialLoader.addPart('namespaces');
    $translate.refresh();
});