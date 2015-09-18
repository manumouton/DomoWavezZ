"use strict";

domoWaveZApp.controller("notificationsController", function ($scope, $translate, $translatePartialLoader, NotificationsService) {
    NotificationsService.fetchAll()
        .then(function (resp) {
            $scope.notifications = resp.data.notifications;
        });

    //Translations management
    $translatePartialLoader.addPart('notifications');
    $translate.refresh();
});