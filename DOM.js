
//........................................ How to Access Elements


// You can access/select DOM elements using various methods provided
// by the 'document' object in JavaScript :

// getElementByld() :
// syntax: document.getElementByld(' idName ')
// Returns the element with the specified ID.

// getElementsByClassName() :
// syntax: document.getElementsByClassName(' className ')
// Returns a collection of elements with the specified class name.

// getElementsByTagName() :
// syntax: document.getElementsByTagName(' tagName ')
// Returns the collection of elements with the specified tag name.

// querySelector() :
// syntax: document.querySelector(' Selector ')
// Returns the first element that matches the specified CSS selector.

// querySelectorAll() :
// syntax: document.querySeIectorAII(' Selector ')
// Returns a NodeList representing a list of elements that matches the specified CSS Selector.


//................................... How to Insert/Add new Elements


// Here are various methods for inserting or adding new DOM elements dynamically using
// JavaScript:

// 1. createEIement() .
// Syntax: document.createElement( ' tagName ' )
// Creates a new HTML element with the specified tag name.

// 2. appendChild() :
// Syntax: parentNode.createElement( ' newNode ' )
// Appends/add a new child node to the end of the list of children of a specified parent node.




//....................................... How to Remove/Delete Elements


// remove() •
// Syntax: elelnent.remove()


// - You can directly call the remove() method on that element and that element will be removed.
// removeCbjId() •
// Syntax: parentElement.removeChild(childElement)
// - You can remove an element by targeting its parent node and then using the removeChild() method to
// remove the specific child element.
// To apply this method we must know: 1) Parent Node
// 2) Child Node to be Removed.



// let target1 = document.getElementById('d1')
// console.log(target1)

// let target2 = document.getElementsByClassName('para')
// console.log(target2)

// let target3 = document.getElementsByTagName('div')
// console.log(target3)

// let target4 = document.querySelectorAll('.para')
// console.log(target4)



// let newElement = document.createElement('p')

// let parent = document.getElementById('d2')
// console.log(parent.appendChild(newElement))


// let a = document.getElementById('d2')
// a.remove()





// let parentNode = document.getElementById('parent')
// let childNode = document.getElementById('child3')
// parentNode.removeChild(childNode)// child3 deleted




//...................................... How to Modify Content / Text


// To modify the content or text of elements using the DOM in JavaScript, you
// can access the desired element and then manipulate it by using properties
// like :

// let child1 = document.getElementById('child1')
// let child2 = document.getElementById('child2')


// // • inner Text : Returns text content of an element ( excluding tags )
// console.log(child1.innerText)

// // • innerHTML : Returns plain text of an element( including tags )
// console.log(child1.innerHTML)

// // • textContent : Returns text content even for hidden elements ( excluding tags )
// console.log(child2.textContent)
// // child2 tag visibility is hiddem but the textContent method prints the text to the console





// we can also do this with these properties

// let child4 = document.getElementById('child4')
// child4.innerHTML = "I'm child 4"








// ........................................How to Modify CSS Styles


// To make changes to CSS styles using JavaScript within the DOM, you can access the style
// property of a DOM element and then modify its individual CSS properties.

// • Change individual CSS properties :
// element.style.propertyName = "value"

// let main1 = document.getElementById('mainpara1')
// main1.style.color = "blue"




// • Set Multiple styles at once :
// element.style.cssText = "propertyl : value 1 ; property2 : value 2 •

// let main2 = document.getElementById('mainpara2')
// main2.style.cssText = "color : red; font-weight : 900; font-size : 20px; background-color : yellow;"



// • Removing styles :
// element.style.propertyName =

// main2.style.backgroundColor= ""











































/*

• DOM stands for Document Object Model. When a web page is loaded, the
browser creates the DOM of that page.
• It represents the structure of HTML documents as a tree-like structure, where each
node represents a part of the document.
• In the DOM, every element, attribute, and piece of text in the document is
represented as a node. These nodes are organized in a hierarchical tree structure.
• DOM provides a way to interact with HTML elements in the browser using JS.

*/


/*

There are different types of nodes in the DOM:
Element Nodes:
Represent HTML elements, like <diV>, <hl>, etc.
Text Nodes:
Represent the text content within an element.
Attribute Nodes:
Represent attributes of an element.
Root Node:
The root node of the DOM tree, representing the entire document, '<html>' element.

*/



/*

DOM MANIPULATION :
DOM manipulation allows developers to interact with the structure,
content, and style of web pages.
The following are some of the things you can do with the DOM;

• Accessing/ Selecting Elements
• Add New Elements
Remove/ Delete Elements
Modify Content/ Text
Modify styles

*/