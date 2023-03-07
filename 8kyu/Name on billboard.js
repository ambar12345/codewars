// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1.

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

//My solution
function billboard(name, price = 30){
    let cost=0//declare variable for cost
    for (let i=0;i<name.length;i++){//set up iteration for the length of parameter name
      cost+=price//for each iteration(character or space) add the given price parameter to cost
    }
  return cost;//return cost
  } 