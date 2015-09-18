"use strict";

domoWaveZApp.controller("namespacesController", function ($scope, $translate, $translatePartialLoader, NamespacesService) {
    NamespacesService.fetchAll()
        .then(function (resp) {
            $scope.namespaces = resp.data;
        });

    //Translations management
    $translatePartialLoader.addPart('namespaces');
    $translate.refresh();
});