'use strict';
class MapPageCtrl {
    constructor(BikePoints, CycleHighways, Lines) {
        const vm = this;
        vm.markers = [];
        vm.bikePoints = BikePoints.all;
        vm.cycleHighways = CycleHighways.all;
        vm.lineStops = Lines.all;

        vm.markers.push(BikePoints.all);
        vm.markers.push(Lines.all);
    }
}

angular.module('map-page').controller('MapPageCtrl', MapPageCtrl);
