"use strict";

domoWaveZApp.controller("notificationsController", function ($scope, $translate, $translatePartialLoader, NotificationsService) {
    NotificationsService.fetchAll()
        .success(function (resp) {
            $scope.notifications = resp.data.notifications;
        })
        .error(function (resp) {
            //TODO
        });

    //Translations management
    $translatePartialLoader.addPart('notifications');
    $translate.refresh();
});