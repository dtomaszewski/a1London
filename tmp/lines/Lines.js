'use strict';

angular.module('line', ['restangular']).factory('Lines', function (LondonTransport) {
    var all = [];

    function toggleStops(line) {
        all.splice(0, all.length);
        LondonTransport.one('line', line).getList('stoppoints').then(function (results) {
            results.forEach(function (result) {
                all.push({
                    id: result.id,
                    latitude: result.lat,
                    longitude: result.lon,
                    icon: 'assets/bus.png'
                });
            });
        });
    }

    return {
        all: all,
        toggleStops: toggleStops
    };
});