'use strict';
/* eslint no-param-reassign: ["error", { "props": false }] */

angular.module('sidebar-button').directive('sidebarButtonInput', function () {
    var directive = {
        restrict: 'E',
        templateUrl: 'components/sidebar-button/sidebar-button-input.tmpl.html',
        replace: true,
        scope: {
            service: '=',
            method: '@',
            showText: '@',
            inputPlaceholder: '@'
        },
        link: link
    };

    return directive;

    function link(scope) {
        var buttonState = void 0;

        scope.buttonAction = function (modelData) {
            buttonState = scope.service[scope.method](modelData);
        };
    }
});