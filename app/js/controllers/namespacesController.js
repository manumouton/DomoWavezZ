"use strict";

domoWaveZApp.controller("namespacesController", function ($scope, $translate, $translatePartialLoader, Services) {
    Services.namespaces().success(function (resp) {
        $scope.namespaces = resp.data;
    });

    //Translations management
    $translatePartialLoader.addPart('namespaces');
    $translate.refresh();
});