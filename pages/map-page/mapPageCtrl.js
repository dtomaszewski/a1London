'use strict';
class MapPageCtrl {
    constructor($mdSidenav, BikePoints, CycleHighways, Lines) {
        const vm = this;
        vm.markers = [BikePoints.all, Lines.all];
        vm.cycleHighways = CycleHighways.all;
        vm.$mdSidenav = $mdSidenav;
    }

    openSidebar() {
        this.$mdSidenav('left').open();
    }
}

angular.module('map-page').controller('MapPageCtrl', MapPageCtrl);
