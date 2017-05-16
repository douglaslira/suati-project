(function(){

    'use strict';

    angular.module('suatiApp.core').factory('CoreService', CoreService);

    CoreService.$inject = ['$resource'];

    function CoreService($resource){
        return {
            getData: function () {
                return $resource('../data/contracts.json');
            }
        };
    }

})();