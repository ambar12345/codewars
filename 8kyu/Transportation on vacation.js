// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

//My solution
function rentalCarCost(d) {
    let cost = 40*d //set cost equal to 40 times the number of days
    if (d>=7){//if 7 or more days
      cost-=50//subtract 50 from cost
    }
      else if (d>=3){//if 3 or more days
        cost-=20//subtract 20 from cost
      }
    return cost//return cost
    }