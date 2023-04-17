// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//My solution
function XO(str) {
    let arr = str.toLowerCase().split('')
    let exes = arr.filter(char => char == 'x')
    let ohs = arr.filter(char => char == 'o')
    return exes.length == ohs.length
    }

//created variable arr to hold new array with all lowercase characters
//created variable exes to hold filtered out x's from arr
//created variable ohs to hold filtered out o's from arr
//return boolean of whether arr length of x's is the same as o's


//Different solution similar, but does not create variables
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }