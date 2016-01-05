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

    describe('Directives', function(){
        var compile, rootScope;

        beforeEach(inject(function($compile, $rootScope){
            compile = $compile;
            rootScope = $rootScope;
        }));
        it('Replaces the element with the appropriate content', function(){
            var element = compile('<a-great-eye></a-great-eye>')(rootScope);
            rootScope.$digest();
            expect(element.html()).toContain('Lidless, wreathed in flame, 2 times');
        });
    });

    describe('Person', function () {

        var Person;
        beforeEach(inject(function (_Person_) {
            Person = _Person_;
        }));

        describe('Constructor', function () {
            it('assigns a name', function () {
                expect((new Person('Ben')).name).toEqual('Ben');
            });
        });
    });
});