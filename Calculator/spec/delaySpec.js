import {Delay} from '../app/delay.js';
import {Calculator} from '../app/calculator.js'

describe( "delay", function(){
    
    var originalTimeout;
    var calculator = new Calculator();

    it( "returns a promise", function(){
        var willAdd = Delay( 100, calculator, 'add', [ 1, 1 ] );
        expect( willAdd instanceof Promise ).toBeTruthy();
    });
    
    it( "delays execution", function(done){
        var p = Delay( 1000, calculator, 'add', [ 10, 5 ] );
        p.then( (result) => {
            expect(result).toBe(15);
            done();
        }); 
    });

    it( "delays execution", function(done){
        var p = Delay( 1000, calculator, 'subtract', [ 9, 5 ] );
        p.then((result) => {
            expect(result).toBe(4);
            done();
        }); 
    });

     it( "cannot execute functions that do not exist", function(done){
        var p = Delay( 1000, calculator, 'sqrt', [ 2, 2 ]);

        p.then(function() {
            done(new Error('Promise should not be resolved'));
        }, function(reason){
            expect(reason).toBe('function doesn\'t exist');
            done(); 
        });
    });
});