"use strict";

domoWaveZApp.controller("profilesController", function ($scope, $translate, $translatePartialLoader, Services) {
    Services.profiles().success(function (resp) {
        $scope.profiles = resp.data;
    });

    //Translations management
    $translatePartialLoader.addPart('profiles');
    $translate.refresh();
});