// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


//My solution
function smash (words) {
    let output = words.map( (word,index) => {//create array
       return index != words.length-1 ?  `${word} `: word//with each word with a space,unless it is the last item
        })
    return output.join('')//join all of the words
    }



    //WAY MORE SIMPLE SOLUTION *facepalm*

    let smash = words => words.join(" ")
