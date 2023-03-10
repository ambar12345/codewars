//Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//
//If no occurrences can be found, a count of 0 should be returned.
//
//("Hello", "o")  ==>  1
//("Hello", "l")  ==>  2
//("", "z")       ==>  0
//str_count("Hello", 'o'); // returns 1
//str_count("Hello", 'l'); // returns 2
//str_count("", 'z'); // returns 0

//My solution
function strCount(str, letter){  
    let count = str.split('')//create a variable to hold the sum, split string 
                   .reduce((acc,value) => acc + (value == letter? 1:0),0 )//use reduce method to sum the occurences of the letter
    return count;//return sum of occurrences of letter
    }

    //other solution 
    function strCount(str, letter){  
        return str.split('').filter(c => c == letter).length;
      }


