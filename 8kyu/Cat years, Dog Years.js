// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that


//My solution

var humanYearsCatYearsDogYears = function(humanYears) {
    let yrs =  humanYears-2
    return humanYears == 1? [humanYears, 15, 15] 
          : humanYears ==2? [humanYears, 24, 24] 
          : [humanYears,  24 + 4*(yrs), 24 + 5*yrs]
    }

//created variable yrs to determine amount of leftover years in the case of humanYears>2
//used a ternary operator for the 3 different cases
//first case humanYears is equal to one
//second case humanYears is equal to two
//third case humanYears is greater than two and the variable yrs is used to calculate how many years should be added to cat and dog years