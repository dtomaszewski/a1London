'use strict';
angular.module('bike-points', ['restangular'])
    .factory('BikePoints', (LondonTransport) => {
        const all = [];

        function toggle() {
            if (all.length > 0) {
                all.splice(0, all.length);
            } else {
                LondonTransport.all('BikePoint').getList().then((results) => {
                    results.forEach((result) => {
                        all.push({
                            id: result.id,
                            latitude: result.lat,
                            longitude: result.lon
                        });
                    });
                });
            }
        }

        return {
            all,
            toggle
        };
    }
);