'use strict';
angular.module('map', []).directive('map', () => {
    const directive = {
        restrict: 'E',
        templateUrl: 'components/map/map.tmpl.html',
        scope: {
            markers: '=',
            markers2: '='
        }
    };
    return directive;
});
