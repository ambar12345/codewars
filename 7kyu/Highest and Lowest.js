//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
//Examples
//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"
//Notes
//All numbers are valid Int32, no need to validate them.
//There will always be at least one number in the input string.
//Output string must be two numbers separated by a single space, and highest number is first.

//My solution
function highAndLow(numbers){
    let result = numbers.split(" ")//split each number separated by spaces and convert into array
                        .sort((a,b)=> b-a)//sort numbers high to low
    return `${result[0]} ${result[result.length-1]}`//return a template literal containing the first number which is the highest and the last number which is the lowest
  }