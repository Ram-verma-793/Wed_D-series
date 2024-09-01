//.................................... Events in JavaScript :



// • An event is a signal that something has happened, or refers to a specific occurrence or incident.
// • In web development, events occur frequently as users interact with web pages. Examples of events
// include clicking a button, typing in a text input field, hovering over an element with the mouse,
// submitting a form, loading a page and many more.
// • Types ot Events :
// - Mouse Events ( click, double-click, hover etc.)
// Keyboard Events ( keypress, keyup, etc.)
// - Form Events ( submit, change, etc.)





// To handle these events (to respond to specific events) there are two ways :


// 1. By using an event handler
// 2. By using an event listener


// ..........Event Handlers :

// Event handlers are functions directly assigned to specific HTML attributes and are
// executed when the associated event occurs.

function changeBackground(){
    let btn = document.getElementById('container')
    btn.style.backgroundColor = "red"
}
function changeBody(){
    let btn2 = document.getElementById('body')
    btn2.style.backgroundColor = "pink"
}




//............... Event Listeners :

// Event Listeners are functions attached to elements using JavaScript. They offer a more
// flexible and powerful way to handle events.

let button = document.getElementById('mybtn')

button.addEventListener('click', function(){
    document.write("mytbtn is pressed")
})
button.addEventListener('click', function(){
    document.write("mytbtn is pressed again!")
})