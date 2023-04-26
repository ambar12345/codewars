// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

//My solution

function sayHello( name, city, state ) {
    let fullName = ''
    for (let i=0; i<name.length;i++){
      fullName+= name[i]
      if (i != name.length-1){
        fullName+=' '
      }
    }
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
  }
  //created string variable and used loop to insert full name with spaces in b/n until the last name
  //returned template literal with variables


  //Simple solution
  function sayHello( name, city, state ) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
    }

//use join method to join names!