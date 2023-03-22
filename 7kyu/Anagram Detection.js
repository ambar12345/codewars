// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

//My solution

var isAnagram = function(test, original) {
    let testArr = test.toLowerCase().split('').sort().join('')//make string have all lower case letters, convert into array, sort, convert back to string
    let originalArr = original.toLowerCase().split('').sort().join('')//make string have all lower case letters, convert into array, sort, convert back to string
    return testArr == originalArr//return whether true or false both strings are equal
    };
    