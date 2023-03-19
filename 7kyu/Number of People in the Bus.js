// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.


//My solution
var number = function(busStops){
    let on = []//create empty array to hold all values of getting on the bus
    let off = []//create empty array to hold all values of getting off the bus
    for (let i=0;i<busStops.length;i++){//for loop to go through array
      for (let j=0;j<2;j++){//for loop to go through each item in each sub array
      if (j==0){on.push(busStops[i][j])}//if j is 0, add to on array
        else {off.push(busStops[i][j])}//if j is 1, add to off array
    }}
    let onSum= on.reduce((acc,value)=> acc+value,0)//sum of items of on array
    let offSum = off.reduce((acc,value)=> acc+value,0)//sum of items of off array
      return onSum - offSum//return the difference between those that got on and those that got off
    }