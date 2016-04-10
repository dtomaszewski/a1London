'use strict';
/* eslint no-param-reassign: ["error", { "props": false }] */
angular.module('sidebar', ['sidebar-button'])
    .directive('sidebar', (BikePoints, CycleHighways) => {
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

            scope.bikePointsService = BikePoints;
            scope.cycleHighwaysService = CycleHighways;

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

            scope.button2Text = 'Show Cycle Highways';
            scope.button2Disabled = false;
            let cycleHighwaysState;
            scope.toggleCycleHighways = function() {
                cycleHighwaysState = CycleHighways.toggle();
                if (cycleHighwaysState) {
                    scope.button2Text = 'Collecting data';
                    scope.button2Disabled = true;

                    cycleHighwaysState.then(() => {
                        scope.button2Text = 'Hide Cycle Highways';
                        scope.button2Disabled = false;
                    });
                } else {
                    scope.button2Text = 'Show Cycle Highways';
                }
            };
        }
    });