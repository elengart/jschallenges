"use strict";

export class Calculator {

    _calc(f, n) {
        if (n && n.length > 1) {
            if(isNaN(n[0]) || isNaN(n[1])) {
                return null;
            }
            return f(n[0], n[1]);
        }
        return null;
    }

    add(){
        return this._calc((n1, n2) => (n1 + n2), arguments);
    }
    
    subtract(){
        return this._calc((n1, n2) => (n1 - n2), arguments);
    }
    
    multiply(){
        return this._calc((n1, n2) => (n1 * n2), arguments);
    }
    
    divide(){
        let f = (n1, n2) => {
            if (n2 === 0) {
                return NaN;
            }
            return n1/n2;
        };
        return this._calc( f, arguments);
    }  
}