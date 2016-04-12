'use strict';
/* eslint no-param-reassign: ["error", { "props": false }] */

angular.module('sidebar-button', []).directive('sidebarButton', function () {
    var directive = {
        restrict: 'E',
        templateUrl: 'components/sidebar-button/sidebar-button.tmpl.html',
        replace: true,
        scope: {
            service: '=',
            showText: '@',
            hideText: '@'
        },
        link: link
    };

    return directive;

    function link(scope) {
        scope.buttonText = scope.showText;
        scope.buttonDisabled = false;

        var buttonState = void 0;

        scope.toggleData = function () {
            buttonState = scope.service.toggle();
            if (buttonState) {
                scope.buttonText = 'Collecting data';
                scope.buttonDisabled = true;
                buttonState.then(function () {
                    scope.buttonText = scope.hideText;
                    scope.buttonDisabled = false;
                });
            } else {
                scope.buttonText = scope.showText;
            }
        };
    }
});