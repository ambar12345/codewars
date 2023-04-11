// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


//My solution

function removeSmallest(numbers) {
    let smallest = numbers.slice(0).sort((a,b) => a-b).shift()//a way to find the lowest number in the array
    let copy = []//copy variable to hold new array without lowest number
    let found = null//variable used to control when exactly ONE value of the lowest number is found
    for (let i=0;i<numbers.length;i++){//use loop to iterate over the array
      if (numbers[i]==smallest && found == null){//if the lowest number is found AND the number has not already been excluded
        found=true//when the number is found for the first time, make found equal to true so it will no longer exclude the number again
      }
      else{//if the number is not equal to the lowest number
        copy.push(numbers[i])//add the number to the copy array
      }
    }
    return copy//return copy 
  }


  ///*note* can't just copy array numbers because since it references the same object it will be mutated, must use numbers.slice(0) for a shallow copy

  //Other Solution
  function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }


  //Spread Operator ...
  //The spread (...) syntax allows an iterable, such as an array or string,
  // to be expanded in places where zero or more arguments (for function calls) 
  //or elements (for array literals) are expected. In an object literal, the spread syntax 
  //enumerates the properties of an object and adds the key-value pairs to the object being created.
  //Spread Operator acts like slice as well!
  //EXAMPLE:
  function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // Expected output: 6


  //Example:
  const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"];
//  ["head", "shoulders", "knees", "and", "toes"]

const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()

arr2.push(4);
//  arr2 becomes [1, 2, 3, 4]
//  arr remains unaffected