// Complete the function which converts hex number (given as a string) to a decimal number.

//My solution
function hexToDec(hexString){
    return  parseInt(hexString, 16);//parseInt converts the characters that can be converted in the string into numbers
    //then the radix or '16' indicates which numeral system will be used in this case, the number will be parsed from a hexadecimal number to a decimal number
   }