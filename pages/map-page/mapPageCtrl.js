'use strict';
class MapPageCtrl {
    constructor(BikePoints) {
        const vm = this;
        vm.bikePoitns = BikePoints.all;
    }
}

angular.module('map-page').controller('MapPageCtrl', MapPageCtrl);
