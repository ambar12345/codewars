// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

//My solution
function getSize(width, height, depth){
    let array = [2*width*height + 2*width*depth + 2*height*depth, width*height*depth]
    return array;
  }

  //created an array to hold the 2 values
  //SA = 2lw + 2lh + 2wh
  //volume = width * height * depth