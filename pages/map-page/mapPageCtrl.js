'use strict';
class MapPageCtrl {
    constructor(LondonTransport) {
        const vm = this;
        vm.bikePoints = [];

        this.sidebarAction = function() {
            if (vm.bikePoints.length) {
                vm.bikePoints = [];
            } else {
                return LondonTransport.all('BikePoint').getList().then((results) => {
                    results.forEach((result) => {
                        vm.bikePoints.push({
                            id: result.id,
                            latitude: result.lat,
                            longitude: result.lon
                        });
                    });
                });
            }
            return null;
        };
    }
}

angular.module('map-page').controller('MapPageCtrl', MapPageCtrl);
