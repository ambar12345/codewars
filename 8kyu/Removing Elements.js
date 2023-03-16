// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//My solution

function removeEveryOther(arr){
    let newArr = arr.filter((el,index) => index%2 == 0 )//remove every other element with index not divisible by 2
    return newArr;//return new filtered array
        }