// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//My solution
function repeatStr (n, s) {
    let str= ''//create variable to hold string
    for (let i=0;i<n;i++){//iterate until string is placed n number of times
      str+=s//add given string to variable created
    }
    return str;//return string with strings
    }