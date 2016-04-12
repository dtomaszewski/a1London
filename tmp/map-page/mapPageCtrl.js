'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MapPageCtrl = function () {
    function MapPageCtrl($mdSidenav, BikePoints, CycleHighways, Lines) {
        _classCallCheck(this, MapPageCtrl);

        var vm = this;
        vm.markers = [BikePoints.all, Lines.all];
        vm.cycleHighways = CycleHighways.all;
        vm.$mdSidenav = $mdSidenav;
    }

    _createClass(MapPageCtrl, [{
        key: 'openSidebar',
        value: function openSidebar() {
            this.$mdSidenav('left').open();
        }
    }]);

    return MapPageCtrl;
}();

angular.module('map-page').controller('MapPageCtrl', MapPageCtrl);