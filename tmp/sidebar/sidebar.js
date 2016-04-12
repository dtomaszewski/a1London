'use strict';
/* eslint no-param-reassign: ["error", { "props": false }] */

angular.module('sidebar', ['sidebar-button']).directive('sidebar', function (BikePoints, CycleHighways, Lines) {
    var directive = {
        restrict: 'E',
        templateUrl: 'components/sidebar/sidebar.tmpl.html',
        scope: {
            action: '&'
        },
        link: link
    };

    return directive;

    function link(scope) {
        scope.bikePointsService = BikePoints;
        scope.cycleHighwaysService = CycleHighways;
        scope.linesService = Lines;
    }
});