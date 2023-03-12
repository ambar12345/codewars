// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


//my solution
function solution(str, ending){
    let check = ''//create empty string to hold last letters of first string
    for (let i=ending.length;i>0;i--){
      check+=str[str.length-i]//add the last letters of the first string with the length of second string
    }
      return check == ending//check if strings are equal and return true or false
    }