// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

const disemvowel = (string) => { 
    return string
            .split('')//convert each character or space into item in array
            .filter(w => w!='a'&& w!='e'&& w!== 'i'&&w != 'o'&&w != 'u' && w!='A'&& w!='E'&& w!='I'&&w != 'O'&&w != 'U')//filter method to get rid of vowels lower and uppercase
            .join('')//join array back into string
 }


