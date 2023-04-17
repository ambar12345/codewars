// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

//My solution

var Ball = class {
    constructor(ballType='regular'){
      this.ballType = ballType
    }
  }

  //class is assigned to variable Ball
  //constructor has one parameter: ballType
  //created default assignment of ballType regular when the parameter was declared