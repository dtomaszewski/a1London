'use strict';
/* eslint no-param-reassign: ["error", { "props": false }] */
angular.module('sidebar', [])
    .directive('sidebar', (BikePoints) => {
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
            scope.buttonText = 'Show Bike points';
            scope.buttonDisabled = false;
            let bikePointsState;

            scope.toggleBikePoints = function() {
                bikePointsState = BikePoints.toggle();
                if (bikePointsState) {
                    scope.buttonText = 'Collecting data';
                    scope.buttonDisabled = true;
                    bikePointsState.then(() => {
                        scope.buttonText = 'Hide Bike points';
                        scope.buttonDisabled = false;
                    });
                } else {
                    scope.buttonText = 'Show Bike points';
                }
            };
        }
    });