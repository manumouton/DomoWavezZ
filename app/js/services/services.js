"use strict";

domoWaveZApp.factory("DevicesService", function ($http, CONFIG) {
    return {
        fetchAll: function () {
            return $http.get(CONFIG.API_URI + 'devices');
        },
        fetchAllSince: function (sinceDate) {
            return $http.get(CONFIG.API_URI + 'devices?since=' + sinceDate);
        },
        fetchOne: function (id) {
            return $http.get(CONFIG.API_URI + 'devices/' + id);
        },
        update: function (id, device) {
            return $http.put(CONFIG.API_URI + 'devices/' + id, device);
        },
        open: function (id) {
            return $http.get(CONFIG.API_URI + 'devices/' + id + '/command/open');
        },
        close: function (id) {
            return $http.get(CONFIG.API_URI + 'devices/' + id + '/command/close');
        },
        on: function (id) {
            return $http.get(CONFIG.API_URI + 'devices/' + id + '/command/on');
        },
        off: function (id) {
            return $http.get(CONFIG.API_URI + 'devices/' + id + '/command/off');
        },
        min: function (id) {
            return $http.get(CONFIG.API_URI + 'devices/' + id + '/command/min');
        },
        max: function (id) {
            return $http.get(CONFIG.API_URI + 'devices/' + id + '/command/max');
        },
        updateCommand: function (id) {
            return $http.get(CONFIG.API_URI + 'devices/' + id + '/command/update');
        },
        exact: function (id, level) {
            return $http.get(CONFIG.API_URI + 'devices/' + id + '/command/exact?level=' + level);
        },
        setMode: function (id, mode) {
            return $http.get(CONFIG.API_URI + 'devices/' + id + '/command/setMode?mode=' + mode);
        },
        setTemp: function (id, temp) {
            return $http.get(CONFIG.API_URI + 'devices/' + id + '/command/setTemp?temp=' + temp);
        },
        /* TODO do not know yet how these are built */
        up: function (id) {

        },
        down: function (id) {

        },
        upMax: function (id) {

        },
        startUp: function (id) {

        },
        startDown: function (id) {

        },
        stop: function (id) {

        }
    };
});

/**
 * Device histories service
 */
domoWaveZApp.factory("DeviceHistoriesService", function ($http, CONFIG) {
    return {
        fetchAll: function () {
            return $http.get(CONFIG.API_URI + 'history');
        },
        fetchOne: function (id) {
            return $http.get(CONFIG.API_URI + 'history/' + id);
        },
        fetchOneSince: function (id, sinceDate) {
            return $http.get(CONFIG.API_URI + 'history/' + id + '?since=' + sinceDate);
        },
        update: function (id, notification) {
            return $http.put(CONFIG.API_URI + 'notifications/' + id, notification);
        }
    };
});

/**
 * Service related to rooms
 */
domoWaveZApp.factory("LocationsService", function ($http, CONFIG) {
    return {
        fetchAll: function () {
            return $http.get(CONFIG.API_URI + 'locations');
        },
        fetchOne: function (id) {
            return $http.get(CONFIG.API_URI + 'locations/' + id);
        },
        update: function (id, location) {
            return $http.put(CONFIG.API_URI + 'locations/' + id, location);
        },
        create: function (location) {
            return $http.post(CONFIG.API_URI + 'locations', location);
        },
        delete: function (id) {
            return $http.delete(CONFIG.API_URI + 'locations/' + id);
        }
    };
});

/**
 * Platform related service
 */
domoWaveZApp.factory("PlatformService", function ($http, CONFIG) {
    return {
        status: function () {
            return $http.get(CONFIG.API_URI + 'status');
        },
        restart: function () {
            return $http.get(CONFIG.API_URI + 'restart');
        }
    };
});

/**
 * Notifications services
 */
domoWaveZApp.factory("NotificationsService", function ($http, CONFIG) {
    return {
        fetchAll: function () {
            return $http.get(CONFIG.API_URI + 'notifications');
        },
        fetchAllSince: function (sinceDate) {
            return $http.get(CONFIG.API_URI + 'notifications?since=' + sinceDate);
        },
        fetchOne: function (id) {
            return $http.get(CONFIG.API_URI + 'notifications/' + id);
        },
        update: function (id, notification) {
            return $http.put(CONFIG.API_URI + 'notifications/' + id, notification);
        }
    };
});

/**
 * Service related to profiles
 */
domoWaveZApp.factory("ProfilesService", function ($http, CONFIG) {
    return {
        fetchAll: function () {
            return $http.get(CONFIG.API_URI + 'profiles');
        },
        fetchOne: function (id) {
            return $http.get(CONFIG.API_URI + 'profiles/' + id);
        },
        update: function (id, profile) {
            return $http.put(CONFIG.API_URI + 'profiles/' + id, profile);
        },
        create: function (profile) {
            return $http.post(CONFIG.API_URI + 'profiles', profile);
        },
        delete: function (id) {
            return $http.delete(CONFIG.API_URI + 'profiles/' + id);
        }
    };
});

/**
 * Service related to instances
 */
domoWaveZApp.factory("InstancesService", function ($http, CONFIG) {
    return {
        fetchAll: function () {
            return $http.get(CONFIG.API_URI + 'instances');
        },
        fetchOne: function (id) {
            return $http.get(CONFIG.API_URI + 'instances/' + id);
        },
        create: function (instance) {
            return $http.post(CONFIG.API_URI + 'instances', instance);
        },
        update: function (id, instance) {
            return $http.put(CONFIG.API_URI + 'instances/' + id, instance);
        },
        delete: function (id) {
            return $http.delete(CONFIG.API_URI + 'instances/' + id);
        }
    };
});

/**
 * Service related to modules
 */
domoWaveZApp.factory("ModulesService", function ($http, CONFIG) {
    return {
        fetchAll: function () {
            return $http.get(CONFIG.API_URI + 'modules');
        }
    };
});

/**
 * Service related to namespaces
 */
domoWaveZApp.factory("NamespacesService", function ($http, CONFIG) {
    return {
        fetchAll: function () {
            return $http.get(CONFIG.API_URI + 'namespaces');
        }
    };
});

/**
 * Templates service providing different items templates stored in json file
 */
domoWaveZApp.factory("TemplatesServices", function ($http, CONFIG) {
    return {
        devicesTemplates: function () {
            return $http.get(CONFIG.DATA_URI + 'devicesTemplates.json');
        }
    };
});
