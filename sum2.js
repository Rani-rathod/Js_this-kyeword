

// In a function in strict mode, this is undefined.


"use strict"

function sum(){
    var add=2+2;
    console.log("sum of two no "+add)
    console.log(this);
}
sum()
