//The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).
//
//Examples
//numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
//numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
//numberToPower(10, 6) // -> 1000000
//Note: Math.pow and some other Math functions like eval() and ** are disabled.
//My solution:
//
function numberToPower(number, power){
  let product=1;//initialize variable
  for (let i=1;i<=power;i++){//set up a counter, start with 1 and add 1 after each iteration
    product*=number;//multiply number by the product
  }
return product; 
}