"use strict";

domoWaveZApp.controller("notificationsController", function ($scope, $translate, $translatePartialLoader, Services) {
    Services.notifications().success(function (resp) {
        $scope.notifications = resp.data.notifications;
    });

    //Translations management
    $translatePartialLoader.addPart('notifications');
    $translate.refresh();
});