describe('ModalController::Test', function() {

    var scope = {}, vm;

    beforeEach(function(){
        module('suatiApp.home')
    });

    beforeEach(inject(function ($controller) {
        vm = $controller('ViewHideController', {$scope: scope, $uibModalInstance: '', items: '', columns: ''});
    }));

    it('should ViewHideController is defined', function () {
        expect('ViewHideController').toBeDefined();
    });

    it('should check showHide is defined', function () {
        expect(vm.showHide).toBeDefined();
    });

    it('should check ok is defined', function () {
        expect(vm.ok).toBeDefined();
    });

    it('should check cancel is defined', function () {
        expect(vm.cancel).toBeDefined();
    });

});