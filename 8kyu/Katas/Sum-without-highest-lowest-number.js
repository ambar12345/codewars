//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//
//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//
//Mind the input validation.
//
//Example
//{ 6, 2, 1, 8, 10 } => 16
//{ 1, 1, 11, 2, 3 } => 6


//My solution

function sumArray(array){
    if (sumArray == null){
        return 0
    }
let sum= array.sort((a,b) => a-b)//sort lowest to highest t
                .slice(1,array.length-1)//then slice array to exclude the lowest and highest numbers
                .reduce((a,b) => a + b, 0)//then sum all numbers, initializing with 0
    return sum;
}
sumArray([ 6, 2, 1, 8, 10])
