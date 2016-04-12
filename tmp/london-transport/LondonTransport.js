'use strict';

angular.module('london-transport', ['restangular']).factory('LondonTransport', function (Restangular) {
    return Restangular.withConfig(function (RestangularConfigurer) {
        RestangularConfigurer.setBaseUrl('https://api.tfl.gov.uk');
    });
});