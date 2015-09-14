"use strict";

domoWaveZApp.controller("navBarController", function ($scope, $translate, $translatePartialLoader) {
    $translatePartialLoader.addPart('navBar');
    $translate.refresh();
});