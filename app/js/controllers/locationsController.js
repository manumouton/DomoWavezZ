"use strict";

domoWaveZApp.controller("locationsController", function ($scope, $translate, $translatePartialLoader, Services) {
    Services.locations().success(function (resp) {
        $scope.locations = resp.data;
    });

    //Translations management
    $translatePartialLoader.addPart('locations');
    $translate.refresh();
});