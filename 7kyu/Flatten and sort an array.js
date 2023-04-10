// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

//My solution

"use strict";

function flattenAndSort(array) {
    let numbers = array.flat().sort((a,b)=> a-b)
    return numbers
    }
//used flat() to join the arrays together 
//From MDN :
//The flat() method creates a new array with all sub-array elements
// concatenated into it recursively up to the specified depth.

//used sort to sort values into ascending order  