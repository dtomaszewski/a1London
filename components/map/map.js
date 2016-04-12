'use strict';
angular.module('map', []).directive('map', () => {
    const directive = {
        restrict: 'E',
        templateUrl: 'components/map/map.tmpl.html',
        scope: {
            markers: '=',
            paths: '='
        }
    };
    return directive;
});
