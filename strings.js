console.log("String in javascript")
// Strings are immutable in javascript

let a= "Ram"
let b= 'Shyam'
console.log(typeof(a))
console.log(typeof(b)) // String primitive
let newString = new String("My name is Ram")
console.log(typeof(newString))  // String object



// templete literls
// we can also write strings in backticks like this 

let fName = "Ram"
let lName = "Singh"
 
let FullName = `Hey My Full Name is ${fName} ${lName}`
console.log(FullName)