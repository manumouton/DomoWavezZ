"use strict";

domoWaveZApp.controller("profilesController", function ($scope, $translate, $translatePartialLoader, ProfilesService) {
    ProfilesService.fetchAll()
        .then(function (resp) {
            $scope.profiles = resp.data;
        });

    //Translations management
    $translatePartialLoader.addPart('profiles');
    $translate.refresh();
});