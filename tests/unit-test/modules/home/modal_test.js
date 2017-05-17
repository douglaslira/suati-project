describe('ModalController::Test', function() {

    var scope = {}, vm;

    beforeEach(function(){
        module('suatiApp.home')
    });

    beforeEach(inject(function ($controller) {
        vm = $controller('ModalController', {$scope: scope, $uibModalInstance: '', item: ''});
    }));

    it('should ModalController is defined', function () {
        expect('ModalController').toBeDefined();
    });

    it('should check openDate is defined', function () {
        expect(vm.openDate).toBeDefined();
    });

    it('should check ok is defined', function () {
        expect(vm.ok).toBeDefined();
    });

    it('should check cancel is defined', function () {
        expect(vm.cancel).toBeDefined();
    });

});