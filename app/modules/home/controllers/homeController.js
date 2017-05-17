(function(){

    'use strict';

    angular.module('suatiApp.home').controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'CoreService', '$uibModal', '$log'];

    function HomeController(scope, CoreService, $uibModal, $log){

        scope.listOfContracts = [];
        scope.listOfColumns = [];
        scope.sort = {
            column: 'Código',
            descending: false
        };

        scope.init = function(){
            CoreService.getData().get().$promise.then(function(res){
                scope.listOfContracts = res.contracts;

                angular.forEach(res.contracts[0], function(o, i){
                    scope.listOfColumns.push({col: i, visible: true});
                });

            }, function(error){
                console.log(error);
            })
        };

        scope.changeSorting = function(column) {
            var sort = scope.sort;
            if (sort.column == column) {
                sort.descending = !sort.descending;
            } else {
                sort.column = column;
                sort.descending = false;
            }
        };

        scope.editContract = function(o){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'modules/home/views/modal.controller.html',
                controller: 'ModalController',
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    item: function () {
                        return o;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                console.log(selectedItem);
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        scope.viewContract = function(o){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'modules/home/views/viewdetail.controller.html',
                controller: 'ModalController',
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    item: function () {
                        return o;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                console.log(selectedItem);
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        scope.viewHideColumn = function(){
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'modules/home/views/viewhide.controller.html',
                controller: 'ViewHideController',
                controllerAs: 'vm',
                size: 'lg',
                resolve: {
                    columns: function(){
                        return scope.listOfColumns;
                    },
                    items: function () {
                        return scope.listOfContracts;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                console.log(selectedItem);
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

    }

})();