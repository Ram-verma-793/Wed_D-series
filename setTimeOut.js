// setTimeout() & setlnterval() :
// Both setTimeout() and setlnterval() are methods of 'window object in JS.
// • setTimeout() :
// The setTimeout() function is used to execute a specified function or piece of code once
// after a specified delay.
// SYNTAX: setTimeout(function, delay)
// - function : the function to be executed after the delay.
// . the time to wait (in milliseconds) before executing the function.
// - delay





// creating a div

const myDiv = document.createElement("div");
document.body.appendChild(myDiv);
myDiv.textContent = "myDiv"
myDiv.style.cssText = `
height : 200px;
width : 200px;
// border : 1px solid red;
color : white;
background-color : black;
font-size : 50px;
font-weight : 900;
display : flex;
align-items : center;
justify-content : center;
border-radius : 50%;`

// change the background of this div using setTimeOut function

// setTimeout(() => {
//     myDiv.style.backgroundColor = "white";
//     myDiv.style.color = "black";

// }, 5000);

// change the background after 5000 ms means 5 seconds

// print the line after time interval 

// setInterval(() => {
//     document.write("function called <br>");
    
// }, 2000);