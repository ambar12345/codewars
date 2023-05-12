// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.


// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


//My solution
var uniqueInOrder=function(iterable){
    let copy = []
    let unique = []
  if (typeof iterable == 'string'){
    copy = iterable.split('')
  }
  else {
    copy = iterable
  }
  for (let i=0; i<copy.length;i++){
    if (copy[i] != copy[i-1]){
      unique.push(copy[i])
      }
  }
    return unique
  }


//Created variables to hold a copy of given 'iterable' array or string
//Conditional checks if 'iterable' is string and converts to array if so
//Else - copies the array into copy
//Created for loop that goes through array copy 
//if statement checks whether previous element is equal to the present element
//if 2 elements are the same then the element is not added to the unique array
//return unique array