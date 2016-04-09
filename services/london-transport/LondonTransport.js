'use strict';
angular.module('london-transport', ['restangular'])
    .factory('LondonTransport', Restangular =>
        Restangular.withConfig((RestangularConfigurer) => {
            RestangularConfigurer.setBaseUrl('https://api.tfl.gov.uk');
        })
);