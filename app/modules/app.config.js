(function(){

    'use strict';

    angular.module('suatiApp').config(configApp);

    configApp.$inject = ['$routeProvider'];

    function configApp($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }

})();