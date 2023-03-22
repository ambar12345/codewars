// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


//My solution

function duplicateCount(text){
    let arr = text.toLowerCase().split('').sort()//create all lowercase array and sort
    let count = 0//declare variable count to hold number of instances of repetitions
    let rep = []//declare empty array to hold repeated characters
    for (let i=0;i<arr.length;i++){//loop to iterate through array
      if (rep.includes(arr[i]) == false && arr[i] == arr[i+1]){//if letter has not already been repeated AND it is equal to the next character
        count++//add to the counting variable
        rep.push(arr[i])//add repeated character to array of repeated characters so it is no longer counted
      }
    }
    return count;// return total count
      }
      