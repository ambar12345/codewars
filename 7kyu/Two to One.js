// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


//My solution
function longest(s1, s2) {//combine 2 strings, turn into array, sort, filter out repeated letters
    let longest = (s1 + s2).split('').sort().filter((letter,index,arr)=> letter!==arr[index-1])
    return longest.join('')//convert to string
    }

