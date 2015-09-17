"use strict";

domoWaveZApp.controller("navBarController", function ($scope, $translate, $translatePartialLoader, CONFIG) {
    $scope.appName = CONFIG.APP_NAME;
    $scope.version = CONFIG.APP_VERSION;

    //Translations management
    $translatePartialLoader.addPart('navBar');
    $translate.refresh();
});