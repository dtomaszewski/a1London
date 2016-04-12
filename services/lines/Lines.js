'use strict';
angular.module('line', ['restangular'])
    .factory('Lines', (LondonTransport) => {
        const all = [];

        function toggleStops(line) {
            all.splice(0, all.length);
            LondonTransport.one('line', line).getList('stoppoints').then((results) => {
                results.forEach((result) => {
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
            all,
            toggleStops
        };
    }
);