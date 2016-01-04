describe('Filters', function(){
    beforeEach(module('MyApp'));

    describe('reverse', function(){
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
});