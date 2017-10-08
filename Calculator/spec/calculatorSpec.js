import {Calculator} from "../app/Calculator.js";

describe( "Calculator", function(){
    var calculator;
    beforeEach( function(){
        calculator = new Calculator();
    } );
    it( "adds 1 and 2", function(){
        expect( calculator.add( 1, 2 ) ).toBe( 3 );
    } );
    it( "subtracts 2 from 9", function(){
        expect( calculator.subtract( 9, 2 ) ).toBe( 7 );
    } );
    it( "multiplies 4 and 3", function(){
        expect( calculator.multiply( 4, 3 ) ).toBe( 12 );
    } );
    
    it( "divides 10 by 2", function(){
        expect( calculator.divide( 10, 2 ) ).toBe( 5 );
    } );
   
    it( "does not divide by 0", function(){
        expect( calculator.divide( 5, 0 ) ).toBeNaN();
    } );    
} );