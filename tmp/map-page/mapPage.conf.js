'use strict';

angular.module('map-page').config(function ($stateProvider) {
    $stateProvider.state('map', {
        url: '/map',
        templateUrl: 'pages/map-page/map-page.tmpl.html',
        controller: 'MapPageCtrl',
        controllerAs: 'mapPageCtrl'
    });
});