"use strict";

domoWaveZApp.controller("locationsController", function ($scope, $translate, $translatePartialLoader, LocationsService) {
    LocationsService.fetchAll()
        .then(function (resp) {
            $scope.locations = resp.data;
        });

    //Translations management
    $translatePartialLoader.addPart('locations');
    $translate.refresh();
});