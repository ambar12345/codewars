// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );


//My solution

var capitals = function (word) {
    word.split('')//convert word to array
      let indices = []//empty array for indices
    for (let i=0;i<word.length;i++){//loop through array word
      if (word[i] === word[i].toUpperCase()){//if a letter is equal to the ltter capital, then
        indices.push(i)}//add its index to indices array
      }
    return indices}//return array with indices
    