// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)



//My solution
function sumStr(a,b) {
    if (a == ''){//in the case a is empty string
      a = '0'//set a to string 0
    }
    if (b ==''){//in the case b is empty string
      b = '0'//set b to string 0
    }
    let sum = +a + +b//create variable sum to hold the sum of a and b converted into numbers with +
    return sum.toString()//return sum back in string form
  }

  //shorter solution
  function sumStr(a,b){
      return String(Number(a)+Number(b))
  }

  //even shorter
  const sumStr = (a,b) => (+a + +b)+''