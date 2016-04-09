'use strict';
/* eslint no-param-reassign: ["error", { "props": false }] */
angular.module('sidebar', [])
    .directive('sidebar', () => {
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

            scope.buttonAction = function(type) {
                const actionPromise = scope.action(type);

                if (actionPromise) {
                    actionPromise.then(() => {
                        scope.buttonPrefix = 'Hide';
                    });
                } else {
                    scope.buttonPrefix = 'Show';
                }
            };
        }
    });