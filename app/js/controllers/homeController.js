"use strict";

domoWaveZApp.controller("homeController", function ($scope, $translate, $translatePartialLoader) {
    $scope.user = 'Manu';

    //Translations management
    $translatePartialLoader.addPart('home');
    $translate.refresh();
});