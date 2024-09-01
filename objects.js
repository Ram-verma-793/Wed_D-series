console.log("Objects in javascript")



//objects are non-primitive data types in JS.
// used to store key-value pairs.
// declare objects with 'const' keyword.
// we use object literals to create an object.
// object literal is the list of 'key : value' pairs inside curly braces { }.
// different properties/keys are separated by commas.
// To access the values, we use dot' . ' operator or square bracket ' [ ] '.
// We can add new properties in the object as well.
// We can also change the values of properties.
// In JS objects, 'methods' can also be stored, these methods are the
// functions associated with that object.

const person = { // creating object person
    "Name" : "Ram",
    'age' : 19,
    "Gender" : "Male",
    greet : function(){ // we can also store  functions as properties in the object
        console.log("Hello Everyone")
    }
}

// accessing the properties of person
console.log(person.Name)
console.log(person.age)
console.log(person.Gender)

// adding new properties to the object
person.job = "Developer"
console.log(person.job)
// updating the properties of the object
person.Name = "Avi"
console.log(person.Name)
person.greet()