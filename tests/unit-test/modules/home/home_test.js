describe('HomeController::Test', function() {

    var scope = {};

    beforeEach(function(){
        module('suatiApp.home')
    });

    beforeEach(inject(function ($controller) {
        $controller('HomeController', {$scope: scope, CoreService: '', $uibModal: '', $log: ''});
    }));

    it('should HomeController is defined', function () {
        expect('HomeController').toBeDefined();
    });

    it('should check value of listOfContracts default', function () {
        expect(scope.listOfContracts).toEqual([]);
    });

    it('should check value of listOfColumns default', function () {
        expect(scope.listOfColumns).toEqual([]);
    });

    it('should check value of sort default', function () {
        expect(scope.sort).toEqual({ column: 'Código', descending: false});
    });

    it('should check changeSorting is defined', function () {
        expect(scope.changeSorting).toBeDefined();
    });

    it('should check editContract is defined', function () {
        expect(scope.editContract).toBeDefined();
    });

    it('should check viewContract is defined', function () {
        expect(scope.viewContract).toBeDefined();
    });

    it('should check viewHideColumn is defined', function () {
        expect(scope.viewHideColumn).toBeDefined();
    });

});