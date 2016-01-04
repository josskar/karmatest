describe('Tests', function(){
    beforeEach(module('MyApp'));

    describe('Filters', function(){
        var reverse;
        beforeEach(inject(function($filter){
            reverse = $filter('reverse', {});
        }));

        it('Should reverse a string', function(){
            expect(reverse('joss')).toBe('ssoj'); //pass
            expect(reverse('works')).toBe('skrow'); //pass
            //expect(reverse('try')).toBe('opps'); //this test should fail
        });
    });

    describe('Controllers', function(){
        var controller, $scope;
        beforeEach(inject(function($controller){
            $scope = {};
            controller = $controller('PasswordController', {$scope: $scope});
        }));

        it('sets the strength to "strong" if the password length is >8 chars', function() {
            $scope.password = 'longerthaneightchars';
            $scope.grade();
            expect($scope.strength).toEqual('strong');
        });

        it('sets the strength to "weak" if the password length <3 chars', function() {
            $scope.password = 'a';
            $scope.grade();
            expect($scope.strength).toEqual('weak');
        });
    });
});