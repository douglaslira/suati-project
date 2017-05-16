(function(){

    'use strict';

    angular.module('suatiApp.home').controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController(scope){
        scope.hello = 'Hello World!';
    }

})();