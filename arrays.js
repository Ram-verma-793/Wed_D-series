// array is a collection of elements
// array have  based indexing 
// arrays are mutable 
const color = ["red", "green", "blue"] // array definition
// console.log(color[2]) // accessing array elements by index
// console.log(color[1])
// console.log(color[0])
// color[2] = "yelllow"  // updating an array
// console.log(color[2])

// ...........................array methods.................................


const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
console.log(arr1)
// push() ->   insert an element at end of the array
arr1.push(0)
console.log(arr1)

// pop() ->   remove last element from  the array
arr1.pop()
console.log(arr1)

// unshift() ->   Add an element at the start of the array
arr1.unshift(12)
console.log(arr1)

// shift() ->   remove first element from  the array
arr1.shift()
console.log(arr1)

// toString() ->   converts an array to string

// the toString()  method doesn't change in the original array but creates a new array and then change in them
console.log(arr1.toString())

// join()  ->  it also converts an array to string but we an defing a seperator with this method
console.log(arr1.join(" ")) // we defines the " " (space) to the arr1 

// length  ->  returns the length of array
console.log(arr1.length)

// concat() -> creates a new array by merging existing arrays

const arr2 = ["apple", "mango", "orange"]
const arr3 = arr1.concat(arr2)
console.log(arr3)


// delete ->  it deletes the element from arrray but the length of the array  remains the same after deletion as it leaves undefined holes in the array
delete arr2[2]
console.log(arr2)

// reverse -> it reverse the array
console.log(arr2.reverse())



// slice() -> extracts a portion of an array
// for example here is (2,5) means 2 is the starting index and 5 is the end index but last index is not included
console.log(arr1)
console.log(arr1.slice(2,5))

// splice() -> changes the content by removing or replacing elements 

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(arr4)
arr4.splice(0,4)
console.log(arr4)