var yourObject = {     
    key$: "1234",
    b: [{tree$: "4567", b: 55, c: undefined}], 
    anotherObject: { 
        anotherTree$: 67, b: 1, c: { a: 1 } 
    }
};

let keys = Object.keys(yourObject);

function print$(o) {

  let keys = Object.keys(o);
  let i;
  let val;

  for(i=0; i < keys.length; i++) {
    if (keys[i].indexOf("$") >= 0 ) {
         console.log(keys[i]);
    }
    val = o[keys[i]];
    if (typeof(val) === 'object') {
      print$(val);
    }
  }
}

print$(yourObject);
