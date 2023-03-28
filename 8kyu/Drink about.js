// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"


//My solution

function peopleWithAgeDrink(old) {
    let drink=''
    old <14 ? drink='toddy': old<18? drink='coke': old<21? drink='beer': drink= 'whisky'
    return `drink ${drink}`;
  };
  

  //other shorter solution
  const peopleWithAgeDrink = old => 'drink ' + (old<14 ? 'toddy' : old<18 ? 'coke' : old<21 ? 'beer' : 'whisky')


  //solution with objects
  let drinkAbout = [
      {ageMin:0 , ageMax : 14, drink : 'toddy'},
      {ageMin: 14, ageMax : 18, drink : 'coke'},
      {ageMin: 18, ageMax : 21, drink : 'beer'},
      {ageMin: 21, ageMax : 999, drink : 'whisky'}
  ]

  let peopleWithAgeDrink = function(old){
      return "drink " + drinkAbout.find(a => a.ageMin <= old && a.ageMax > old).drink;
  }