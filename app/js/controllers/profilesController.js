"use strict";

domoWaveZApp.controller("profilesController", function ($scope, $translate, $translatePartialLoader, ProfilesService) {
    ProfilesService.fetchAll()
        .success(function (resp) {
            $scope.profiles = resp.data;
        })
        .error(function (resp) {
            //TODO
        });

    //Translations management
    $translatePartialLoader.addPart('profiles');
    $translate.refresh();
});