// ........................Hoisting in JavaScript


// • Hoisting is a default behaviour in JavaScript where variables and
// functions declarations are moved to the top of their containing
// scope before code execution.

// • It means you can use a variable or call a function even before it is
// declared in your code.




// • Variables declared with 'var'
// are hoisted with a default initialization ofl
// undefined, whereas

// • Variables declared with 'let' and 'const' are also hoisted, only they are
// hoisted without a default initialization, this makes them inaccessible (such
// variables are in a Temporal Dead Zone).

// • Function Hoisting : the entire function ( both declaration & body ) is hoisted.
// you can call the function before its declaration in the code.
// • Arrow functions are not hoisted. (because it is anonymous function)


// var - declaration moved to top but not initialization
console. log(a)

var a = 10;