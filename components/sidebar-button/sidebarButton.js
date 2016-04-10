'use strict';
/* eslint no-param-reassign: ["error", { "props": false }] */
angular.module('sidebar-button', [])
    .directive('sidebarButton', () => {
        const directive = {
            restrict: 'E',
            templateUrl: 'components/sidebar-button/sidebar-button.tmpl.html',
            replace: true,
            scope: {
                service: '=',
                showText: '@',
                hideText: '@'
            },
            link
        };

        return directive;

        function link(scope) {
            scope.buttonText = scope.showText;
            scope.buttonDisabled = false;

            let buttonState;

            scope.toggleData = function() {
                buttonState = scope.service.toggle();
                if (buttonState) {
                    scope.buttonText = 'Collecting data';
                    scope.buttonDisabled = true;
                    buttonState.then(() => {
                        scope.buttonText = scope.hideText;
                        scope.buttonDisabled = false;
                    });
                } else {
                    scope.buttonText = scope.showText;
                }
            };
        }
    });