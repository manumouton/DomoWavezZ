"use strict";

domoWaveZApp.controller("homeController", function ($scope, $translate, $translatePartialLoader) {
    $scope.user = 'Manu';

    $translatePartialLoader.addPart('home');
    $translate.refresh();

});