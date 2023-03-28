// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

//My solution
function findUniq(arr) {
    arr.sort()//sort array to be in increasing order, unique # had to be first or last element
    if (arr[0]!=arr[1]){//if the first one is different
      return arr[0]}//return first number
      else {//otherwise return last number
        return arr[arr.length-1]
      }
    }