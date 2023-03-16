// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

//My solution

function getSum(a, b){
    let sum=0//create variable to hold sum
    if (a>b){//if a is greater than b
      for (let i=b;i<=a;i++){//start with b and iterate by increasing by 1 up until you reach a
        sum+=i//add the next number to the sum
      }}
    else if (a<b){//if a is less than b
      for (let i=a;i<=b;i++){//start with a and iterate by increasing by 1 up until you reach b
        sum+=i//add the next number to the sum
      }
    }
    else{//when a equals b
      return a//return a
    }
      return sum//return sum if a and b not equal
    }