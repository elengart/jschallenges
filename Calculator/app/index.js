import { Calculator } from './calculator.js'
import { ScientificCalculator } from './scientificCalculator.js'
import { withExponents } from './withExponents.js'
import { Delay } from './Delay.js'

console.log(new Calculator());
console.log(new ScientificCalculator());
let c = new Calculator();
withExponents.call(c);
console.log(c);
console.log(Delay(200, c, 'add', [1,2]).then((x)=>{console.log(x)}));
console.log(Delay(200, c, 'bad', [1,2]));
console.log(Delay(200, null, 'bad', [1,2]));