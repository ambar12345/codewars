// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

// Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

// Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

// Good Luck!


//My solution
//2 paramters: year of birth and year to count years in relation to
//case 1: how many years he will be in the future "You are ... year(s) old." fix year(s)
//case 2: how many years left until year he was born "You will be born in ... year(s). fix year(s)
//case 3: the year equals his birth year "You were born this very year!"

function  calculateAge(birthYr,otherYr) {
    if (birthYr == otherYr){//years are the same, born that year
      return "You were born this very year!"
    }
    else if (birthYr < otherYr){//year of birth is BEFORE the other year
      if (otherYr-birthYr==1)//if the difference is only one year
      return 'You are 1 year old.'
      else //if the difference is more than one year
        return `You are ${otherYr-birthYr} years old.`
    }
    else if (otherYr < birthYr){//year of birth is AFTER the other year
          if (birthYr-otherYr==1)//if the difference is only one year
            return 'You will be born in 1 year.'
          else//if the difference is more than one year
            return `You will be born in ${birthYr-otherYr} years.`
    }
  }
  
  