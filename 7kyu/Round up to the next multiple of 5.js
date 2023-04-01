// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.


//My solution
function roundToNext5(n){
    for (let i=n;i<n+10;i++){
      console.log(i)
      if (i%5==0){
        return i
      }
    }
  }


  //Other Way
  function roundToNext5(n){
    while(n % 5 !== 0) n++;
    return n;
  }
  