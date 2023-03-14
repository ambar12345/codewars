// In this simple exercise, you will build a program that takes a value, integer , 
//and returns a list of its multiples up to another value, limit . If limit is a multiple of integer,
// it should be included as well. There will only ever be positive integers passed into the function, 
//not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function
// should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

//My solution

function findMultiples(integer, limit) {
    let multiples = []//create empty array to hold list of multiples
    for (let i=1;i*integer<=limit;i++){//use iterator to multiply the integer by i(which will increase by 1 each iteration)
      //set up the iteration to stop once the product is greater than the limit given
      multiples.push(i*integer)//add the product to the array
    }
      return multiples//return array with multiples
    }
    