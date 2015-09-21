"use strict";

domoWaveZApp.controller("navBarController", function ($scope, $translate, $translatePartialLoader, PlatformService, CONFIG) {
    $scope.appName = CONFIG.APP_NAME;
    $scope.version = CONFIG.APP_VERSION;

    //PlatformService.status().then(function(response){
    //        $scope.platformAvailable = response.data;
    //    }
    //);

    //Translations management
    $translatePartialLoader.addPart('navBar');
    $translate.refresh();
});