(function(){

    'use strict';

    angular.module('suatiApp.home').controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'CoreService'];

    function HomeController(scope, CoreService){
        scope.hello = 'Hello World!!';
        scope.init = function(){
            CoreService.getData().get().$promise.then(function(res){
                console.log(res.contracts);
            }, function(error){
                console.log(error);
            })
        }
    }

})();