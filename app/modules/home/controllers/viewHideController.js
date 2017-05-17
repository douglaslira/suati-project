(function(){

    'use strict';

    angular.module('suatiApp.home').controller('ViewHideController', ViewHideController);

    ViewHideController.$inject = ['$uibModalInstance', 'items', 'columns'];

    function ViewHideController($uibModalInstance, items, columns){

        var vm = this;
        vm.items = items;
        vm.columns = columns;

        vm.showHide = function(key){
            columns[key].visible = !columns[key].visible;
        };

        vm.ok = function () {
            $uibModalInstance.close(vm.items);
        };
        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }

})();