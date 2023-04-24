// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

//My solution
function sumDigits(number) {
    let sum =Math.abs(number).toString().split('').reduce((acc,val) => acc +  +val, 0)
    return sum;
  }
  //used Math.abs to obtain absolute value of number
  //converted number into string to then split into array elements
  //used reduce to calculate sum of each element of arary
  //returned sum 