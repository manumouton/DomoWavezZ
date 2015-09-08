"use strict";

domoWaveZApp.controller("notificationsController", function ($scope, $translate, $translatePartialLoader, Services) {
    Services.notifications().success(function (resp) {
        $scope.notifications = resp.data;
    });

    //Translations management
    $translatePartialLoader.addPart('notifications');
    $translate.refresh();
});