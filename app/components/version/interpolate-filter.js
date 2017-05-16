(function () {

    'use strict';

    angular.module('suatiApp.components').filter('interpolate', interpolate);

    interpolate.$inject = ['version'];

    function interpolate(version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }

})();
