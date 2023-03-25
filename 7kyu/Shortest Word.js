// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//My solution

function findShort(s){
    let sorted = s.split(' ').sort((a,b) => a.length - b.length )//convert string into array and sort by length
      return sorted[0].length//return length of first item in array which is the word with the shortest length
    }