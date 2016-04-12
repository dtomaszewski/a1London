'use strict';

angular.module('cycle-highways', ['restangular']).factory('CycleHighways', function (LondonTransport) {
    var all = [];

    function toggle() {
        if (all.length > 0) {
            all.splice(0, all.length);
        } else {
            return LondonTransport.all('CycleSuperhighway').getList().then(function (results) {
                var id = 0;
                results.forEach(function (result) {
                    var coordsData = [];
                    for (var i = 0; i < result.geography.coordinates.length; i += 5) {
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
        all: all,
        toggle: toggle
    };
});