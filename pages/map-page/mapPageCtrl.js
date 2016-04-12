'use strict';
class MapPageCtrl {
    constructor(BikePoints, CycleHighways, Lines) {
        const vm = this;
        vm.markers = [BikePoints.all, Lines.all];
        vm.cycleHighways = CycleHighways.all;
    }
}

angular.module('map-page').controller('MapPageCtrl', MapPageCtrl);
