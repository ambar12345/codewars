// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


//My solution

function grow(x){
    let result = x.reduce((acc,value) => acc*value,1)
  return result;  
  }

  //shorter way

  const grow = x => x.reduce((a,b) => a*b)