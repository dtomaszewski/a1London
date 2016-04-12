'use strict';
/* eslint no-param-reassign: ["error", { "props": false }] */
angular.module('sidebar', ['sidebar-button'])
    .directive('sidebar', (BikePoints, CycleHighways, Lines) => {
        const directive = {
            restrict: 'E',
            templateUrl: 'components/sidebar/sidebar.tmpl.html',
            scope: {
                action: '&'
            },
            link
        };

        return directive;

        function link(scope) {
            scope.bikePointsService = BikePoints;
            scope.cycleHighwaysService = CycleHighways;
            scope.linesService = Lines;
        }
    });