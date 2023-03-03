// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]



//My solution
var number=function(array){
    let output = []//create empty array
  for (let counter=1, i=0;counter<=array.length; i++,counter++){//use iterator to stop once you reach last array item
    output.push(counter + ": " +array[i])//add each counter and array item to the new array
  }
    return output;//return array
  }


//other solution
const number = array => array.map((n, i) => `${i + 1}: ${n}`);
//use map, the array item and the index
//map method will produce a counter and the item