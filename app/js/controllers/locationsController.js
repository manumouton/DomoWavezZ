"use strict";

domoWaveZApp.controller("locationsController", function ($scope, $translate, $translatePartialLoader, LocationsService) {
    LocationsService.fetchAll()
        .success(function (resp) {
            $scope.locations = resp.data;
        })
        .error(function (resp) {
            //TODO
        });

    //Translations management
    $translatePartialLoader.addPart('locations');
    $translate.refresh();
});