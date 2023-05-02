// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!


//My solution

//merge arrays
//sort in asc order
//delete copies

function mergeArrays(arr1,arr2){
    let merge = []
    let uniqueArr = []  
  for (let i=0;i<arr1.length;i++){
    merge.push(arr1[i])
  }
  for (let j=0;j<arr2.length;j++){
    merge.push(arr2[j])
  }
   merge.sort((a,b) => a-b).forEach((num) => {
      if (!uniqueArr.includes(num)) {
          uniqueArr.push(num)
      }
  })
  return uniqueArr
  }


  //merged 2 arrays into 1 array called merge with for loops
  //sorted array in ascending order with sort
  //used for each to go through array and exclude any number that was already 
  //added to the unique integer array
  
  
  
  