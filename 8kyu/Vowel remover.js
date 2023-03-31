// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata


//My solution
function shortcut (string) {
    let newStr = ''
    for (let i=0;i<string.length;i++){
      if (string[i]!='a' && 
          string[i]!='e' && 
          string[i]!='i' && 
          string[i]!='o' &&
          string[i]!='u' ){
          newStr+=string[i]
          }
    }
    return newStr;
  }

  //using regex

  function shortcut(string){
      return string.replace(/[aeiou]/g,'')
  }

  