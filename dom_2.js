// document.getElementById("h1").addEventListener("click", function(){
//     console.log("h1 clicked")
//     document.getElementById("h1").style.color = "red";
//     document.getElementById("h1").style.fontSize = "100px";
//     document.getElementById("h1").style.height

// });



// document.addEventListener("click", ()=> {
//     document.getElementById("d1").style.cssText = "height :500px; width :500px; background : yellow;";
// })


// document.addEventListener("click", function() {
//     document.getElementById("h2").style.background = "blue";
// })


// let para1 = document.getElementById("para").textContent;
// console.log(para1)



// let h2 = document.getElementById("h2").innerText = "hello javascript";


//     let divs = document.querySelectorAll(".mydiv");
//     divs.forEach((div) => {
//         div.style.border = "2px solid red";
//         div.style.margin = "10px";
//         div.style.padding = "20px";
//         div.style.height = "25px";
//         div.style.width = "80%";
//     })



// let d2 = document.querySelector(".d2");
// console.log(d2);
// let id = d2.getAttribute("id");
// console.log(id)
// let Class = d2.getAttribute("class");
// console.log(Class)
// let Name = d2.getAttribute("name");
// console.log(Name)

// let d3 = document.querySelector(".d3");
// console.log(d3);
// let d3Id = d3.setAttribute("id", "d3");
// console.log(d3Id);


//   .............inserting a new div in this code

const newDiv = document.createElement("div");
// new div created

document.body.appendChild(newDiv);
// newDiv inserted in body

// newDiv.innerText = "This is a new div";
newDiv.style.cssText = `
   height : 200px;
   width : 300px;
   border : 1px solid black;`

const newHeading = document.createElement("h2");
newDiv.appendChild(newHeading);
newHeading.innerText = "this is a new heading";
newHeading.style.cssText = `
   color : red;
   background-color : yellow;
   fontSize : 30px;
   fontweight : 900;`


// ...................creating a new button in this code

const mybtn = document.createElement("button");
mybtn.innerText = "click me";
newDiv.appendChild(mybtn);
mybtn.style.cssText = `
    height: 80px;
    width: 80px;
    padding: 8px;
    color: blue;
    background-color: red;
    margin: 40px;
    border-radius: 50%;
    font-size: 15px;
    box-shadow: 2px 2px 2px #000;
    transition: all 0.5s ease;
`;


// ...........Adding hover effect to the button

mybtn.addEventListener("mouseover", () => { // mouse in effect to change bg and color
    mybtn.style.background = "blue";
    mybtn.style.color = "red";
    mybtn.style.boxShadow = "4px 4px 8px #000";

})

mybtn.addEventListener("mouseout", () => { // mouse out function to make the button like before
    mybtn.style.background = "red";
    mybtn.style.color = "blue";
    mybtn.style.boxShadow = "2px 2px 2px #000";


})