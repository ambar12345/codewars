// Task
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.


//My solution
function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
  }


//use the properties inputted by the user in the returned string


 //other solution 

 function animal({name,color,legs}){
 return `This ${color} ${name} has ${legs} legs.`
 }

 //specify the properties of the object when declaring the function