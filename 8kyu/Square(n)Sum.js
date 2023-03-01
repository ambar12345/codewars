//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
//For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 91 
//2
// +2 
//2
// +2 
//2
// =9.

//MY SOLUTION
function squareSum(numbers){
    let answer= numbers.reduce((acc,value) => acc + (Math.pow(value,2)),0)
    return answer;
    }

 ////other solutions

      function squareSum(numbers){
        return numbers.reduce((sum,num) => sum + (num * num), 0);
      }

      function squareSum(numbers){
        var sum = 0;
        numbers.forEach(function(n) {
          sum += n * n
        });
        return sum;
      }