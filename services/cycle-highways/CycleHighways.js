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
                        let coordsData = [];
                        result.geography.coordinates.forEach((coords) => {
                            coordsData.push({
                                id: id++,
                                latitude: coords[1],
                                longitude: coords[0]
                            });
                        });
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