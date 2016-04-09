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
            scope.buttonPrefix = 'Show';

            scope.setBikePoints = function() {
                BikePoints.toggle();
            };
        }
    });