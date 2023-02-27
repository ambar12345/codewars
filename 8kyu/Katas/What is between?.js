//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
//
//For example:
//
//a = 1
//b = 4
//--> [1, 2, 3, 4]

//My solutoin
function between(a, b) {
    let arr = []//declare array that will hold values 
    for (let i=a;i<=b;i++){//use a for loop to add each value
      arr.push(i)//add each value to array
  }
    return arr//return array with values
    }