// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

//My solution

function paperwork(n, m) {//2 conditionals
    if (n<0 || m<0){//if n or m are less than 0
      return 0//return 0
    }
    else{//for all other n and m values
      return n*m//return n times m
    }
  }