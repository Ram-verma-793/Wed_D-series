
//.................... Callback Functions :


// • A callback function is a function that is passed as an argument to another function and is
// expected to execute after some specific action.

// • It allows asynchronous operations to be performed in JavaScript, where functions don't
// have to wait for the completion of other functions before executing.

// Why callback functions are used :

// • Handling Asynchronous operations
// • Event Handling



// =>  Handling Asynchronous operations
// function to add a and b

function add(a,b) {
    return a+b;
}

// // function to print the result of a+b

// function result(a,b,add) {
//     console.log("result of " + a + " and " + b + " : " + add(a,b));
// }
//  result(5,10,add);


setTimeout(() => {
    console.log("result is : " + add(5,10));
}, 2000) 
// printing the result after 2 seconds
 


// => Event Handling


document.addEventListener("click", () => { // here we use array function as a parameter of addEventListner function
    console.log("button clicked")
})



