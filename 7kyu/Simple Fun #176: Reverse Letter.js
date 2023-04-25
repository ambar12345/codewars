function reverseLetter(str) {
    let arr = str.split('').reverse()
    let answer = ''
    for (let i=0; i<arr.length; i++){
      if (arr[i].toUpperCase() != arr[i].toLowerCase()){
        answer+=arr[i]
      }
    }
    return answer 
    }
    
    //created array with str and reversed characters
    //created string variable called answer
    //used loop to go through reversed array and compare the upper case with the lower case char
    //if the uppercase and lowercase char are not equal then it is added to answer string
    //return answer string
    