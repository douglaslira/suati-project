describe('HomeController::Test', function() {

    var scope = {};

    beforeEach(function(){
        module('suatiApp.home')
    });

    beforeEach(inject(function ($controller) {
        $controller('HomeController', {$scope: scope});
    }));

    it('should HomeController is dedined', function () {
        expect('HomeController').toBeDefined();
    });

    it('should check value of hello default', function () {
        expect(scope.hello).toEqual('Hello World!');
    });

});