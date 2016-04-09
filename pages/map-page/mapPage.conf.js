'use strict';
angular.module('map-page')
    .config(($stateProvider) => {
        $stateProvider.state('map', {
            url: '/map',
            templateUrl: 'pages/map-page/map-page.tmpl.html'
        });
    });