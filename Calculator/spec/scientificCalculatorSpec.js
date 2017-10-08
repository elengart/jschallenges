import {ScientificCalculator} from "../app/scientificCalculator.js";
import {Calculator} from "../app/calculator.js";

describe( "ScientificCalculator", function(){
    var calculator;
    beforeEach( function(){
        calculator = new ScientificCalculator();
    } );
    it( "extends Calculator", function(){
        expect( calculator instanceof ScientificCalculator ).toBeTruthy();
    } );
    
    it( "extends Calculator", function(){
        expect( calculator instanceof Calculator ).toBeTruthy();
    } );
    
    it( "returns the sine of PI / 2", function(){
        expect( calculator.sin( Math.PI / 2 ) ).toBe( 1 );
    } );
    it( "returns the cosine of PI", function(){
        expect( calculator.cos( Math.PI ) ).toBe( -1 );
    } );
    it( "returns the tangent of 0", function(){
        expect( calculator.tan( 0 ) ).toBe( 0 );
    } );
    it( "returns the logarithm of 1", function(){
        expect( calculator.log( 1 ) ).toBe( 0 );
    } );
} );