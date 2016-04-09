'use strict';
class MapPageCtrl {
    constructor(LondonTransport) {
        LondonTransport.all('BikePoint').getList().then((results) => {
            this.bikePoints = [];

            results.forEach((result) => {
                this.bikePoints.push({
                    id: result.id,
                    latitude: result.lat,
                    longitude: result.lon
                });
            });
        });
    }
}

angular.module('map-page').controller('MapPageCtrl', MapPageCtrl);
