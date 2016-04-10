'use strict';
class MapPageCtrl {
    constructor(BikePoints, CycleHighways) {
        const vm = this;
        vm.bikePoitns = BikePoints.all;
        vm.cycleHighways = CycleHighways.all;
    }
}

angular.module('map-page').controller('MapPageCtrl', MapPageCtrl);
