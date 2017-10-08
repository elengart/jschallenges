"use strict";

/**
    simple functional mixin
    usage withExponents.call(..., )
*/
export function withExponents() {
    this.pow = (n1, n2) => (Math.pow(n1,n2));
    
    this.multiplyExp = (e1, e2) => (
        this.pow(e1[0],e1[1]) * this.pow(e2[0],e2[1])
    );
    
    this.divideExp = (e1, e2) => (
        this.pow(e1[0],e1[1]) / this.pow(e2[0],e2[1])
    );
}