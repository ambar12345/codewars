// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]


//My solution

function powersOfTwo(n){
    let answers=[]//empty array for answers
    for (let i=0;i<=n;i++){//loop until you reach n
      answers.push(Math.pow(2,i))//go through powers of 2 until you reach n
    }
    return answers;//return array with answers
  }