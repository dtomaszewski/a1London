'use strict';
angular.module('cycle-highways', ['restangular'])
    .factory('CycleHighways', (LondonTransport) => {
        const all = [];

        function toggle() {
            if (all.length > 0) {
                all.splice(0, all.length);
            } else {
                return LondonTransport.all('CycleSuperhighway').getList().then((results) => {
                    let id = 0;
                    results.forEach((result) => {
                        const coordsData = [];
                        for (let i = 0; i < result.geography.coordinates.length; i += 5) {
                            coordsData.push({
                                id: id++,
                                latitude: result.geography.coordinates[i][1],
                                longitude: result.geography.coordinates[i][0]
                            });
                        }
                        all.push(coordsData);
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