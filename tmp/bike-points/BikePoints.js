'use strict';

angular.module('bike-points', ['restangular']).factory('BikePoints', function (LondonTransport) {
    var all = [];

    function toggle() {
        if (all.length > 0) {
            all.splice(0, all.length);
        } else {
            return LondonTransport.all('BikePoint').getList().then(function (results) {
                results.forEach(function (result) {
                    all.push({
                        id: result.id,
                        latitude: result.lat,
                        longitude: result.lon,
                        icon: 'assets/bike.png'
                    });
                });
            });
        }
        return false;
    }

    return {
        all: all,
        toggle: toggle
    };
});