(function(){

    'use strict';

    angular.module('suatiApp.home').controller('ModalController', ModalController);

    ModalController.$inject = ['$uibModalInstance', 'item'];

    function ModalController($uibModalInstance, item){

        var vm = this;
        vm.item = item;
        vm.datepicker = [
            {opened: false, format: 'MMM/yyyy'},
            {opened: false, format: 'MMM/yyyy'},
            {opened: false, format: 'MMM/yyyy'},
            {opened: false, format: 'MMM/yyyy'}
        ];

        vm.openDate = function(obj){
            obj.opened = !obj.opened;
        };

        vm.ok = function () {
            $uibModalInstance.close(item);
        };
        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    }

})();