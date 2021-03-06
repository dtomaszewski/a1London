'use strict';
angular.module('bike-points', ['restangular'])
    .factory('BikePoints', (LondonTransport) => {
        const all = [];

        function toggle() {
            if (all.length > 0) {
                all.splice(0, all.length);
            } else {
                return LondonTransport.all('BikePoint').getList().then((results) => {
                    results.forEach((result) => {
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
            all,
            toggle
        };
    }
);