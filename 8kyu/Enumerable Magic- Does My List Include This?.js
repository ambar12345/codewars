// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

//My solution

function include(arr, item){
    for (let i=0; i<arr.length;i++){
      if (arr[i] === item){
        return true
      }
    }
     return false
   }

//created loop that will go through array
//conditional checks whether current array element at i is equal to the item
//if nothing is found then will return false