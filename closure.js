// Closures are a fundamental concept in JavaScript that allow functions to access variables
//  from an outer function’s scope even after the outer function has finished executing.
//  This can be incredibly useful for creating private variables and functions, as well as 
//  for maintaining state in asynchronous operations.



function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable); // Accesses outerVariable from outerFunction's scope
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Logs: 'I am outside!'
