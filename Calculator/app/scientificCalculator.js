"use strict";
import {Calculator} from './calculator.js';

export class ScientificCalculator extends Calculator {
    constructor() {
        super();
    }    
    sin(n){
        return Math.sin(n);
    }    
    cos(n){
        return Math.cos(n);
    }        
    tan(n){
        return Math.tan(n);
    }        
    log(n){
        return Math.log(n);
    }
}
