// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.



//My solution
function well(x){
    let good = x.filter(word => word ==='good')//go through array and look for 'good' and add to array good
    if (good.length  == 0){//if there are no 'good's in array
      return 'Fail!'}
    else if (good.length > 2){//if ithere are more than 2 'good's
      return 'I smell a series!'
    }
    else{//there there is 1 or 2 'good'
      return 'Publish!'
    }     
  }a