"use strict";

export function Delay(seconds, obj, method, args) {
  
    let func = () => {
        return obj[method](args[0],args[1]);
    };
    
    return new Promise((resolve, reject) => {
        if (!obj || typeof(obj) !== 'object' || !obj[method]) {
            reject('function doesn\'t exist');
            return;
        } 
        let runner = () => {
            resolve(func());
        };
        setTimeout(runner, seconds);
    });
}