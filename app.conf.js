'use strict';
angular.module('LondonApp')
    .config((uiGmapGoogleMapApiProvider) => {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDCGn3ZKlnlm7YVlh3F99bfxvDzNRRgu88',
            v: '3.20',
            libraries: 'weather,geometry,visualization'
        });
    })
    .config(($urlRouterProvider) => {
        $urlRouterProvider.otherwise('/map');
    });