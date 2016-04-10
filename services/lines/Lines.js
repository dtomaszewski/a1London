'use strict';
angular.module('line', ['restangular'])
    .factory('Lines', (LondonTransport) => {
        const all = [];

        function toggleStops(line) {
            if (all.length > 0) {
                all.splice(0, all.length);
            } else {
                return LondonTransport.one('line', line).getList('stoppoints').then((results) => {
                    results.forEach((result) => {
                        all.push({
                            id: result.id,
                            latitude: result.lat,
                            longitude: result.lon
                        });
                    });

                    console.log('all ', all);
                });
            }
            return false;
        }

        return {
            all,
            toggleStops
        };
    }
);