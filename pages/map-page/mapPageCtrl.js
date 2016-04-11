'use strict';
class MapPageCtrl {
    constructor(BikePoints, CycleHighways, Lines) {
        const vm = this;
        vm.markers = [BikePoints.all, Lines.all];
    }
}

angular.module('map-page').controller('MapPageCtrl', MapPageCtrl);
