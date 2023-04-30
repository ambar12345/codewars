// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

//My solution

function position(letter){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return "Position of alphabet: " + (alphabet.indexOf(letter)+1)
        }

//created string with letters of alphabet
//returned a string and the index of the position of the letter plus 1 to indicate its place in the alphabet