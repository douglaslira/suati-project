(function(){

    'use strict';

    angular.module('suatiApp.components').filter('orderObjectBy', orderObjectBy);

    orderObjectBy.$inject = [];

    function orderObjectBy(){

        return function(input, attribute, asc) {

            if (!angular.isObject(input)) {
                return input;
            }

            var array = [];
            for (var objectKey in input) {
                array.push(input[objectKey]);
            }

            if(asc){
                array.sort(function (a, b) {
                    a = parseInt(a[attribute]);
                    b = parseInt(b[attribute]);
                    return a - b;
                });
            } else {
                array.reverse();
            }

            return array;
        };
    }

})();