(function() {

    'use strict';

    angular.module('suatiApp.home', ['ngRoute']).config(configModule);

    configModule.$inject = ['$routeProvider'];

    function configModule($routeProvider){
        $routeProvider.when('/home', {
            templateUrl: 'modules/home/views/home.controller.html',
            controller: 'HomeController'
        });
    }

})();