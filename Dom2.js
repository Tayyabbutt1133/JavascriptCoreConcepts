// DOM PART 2

//getattribute
let div = document.querySelector("div")
div.getAttribute("id")
console.log("Id name is: ", div)

div.style.backgroundColor="green"

let henlo = document.querySelector("p")
henlo.getAttribute("class")
console.log("Class name is: ",henlo)

// Set attribute
let news = document.querySelector("p")
news.setAttribute("henlo", "hello ji")
console.log(news)

news.style.backgroundColor="red"

// Insert Elements
let newBtn = document.createElement("button")
newBtn.innerText="Click me!"
console.log(newBtn)

let divvy = document.querySelector("div")
// for inserting at the end
divvy.append(newBtn)
// for inserting at the beginning
divvy.prepend(newBtn)

// for inserting just before the div(outside box)
divvy.before(newBtn)

// for inserting after the dic(outside of box)
divvy.after(newBtn)

// we actually create the whole new heading using javascript
let newHeading = document.createElement("h1")
newHeading.innerHTML = "<i>Hi ! I am new</i>"

document.querySelector("body").prepend(newHeading)

let henli = document.getElementsByClassName("hello")
henli.innerText="My name is tayyeb"
console.dir(henli)

let henli = document.getElementsByTagName("div")
henli.innerText="My name is tayyeb"
console.dir(henli)

node.remove()  //removes the node

append.child()

let attaching = document.getElementById("heading")

let text = document.createTextNode("my name is tayyeb")

attaching.appendChild(text)
console.dir("The complete sentence is: ", attaching)

//example 2

let newElement=document.createElement("p")
// we append new html tag(p) inside empty div
attaching.appendChild(newElement)
console.log(attaching)

// in this we actually remove that child node which we created before
attaching.removeChild(newElement)
console.log(attaching)

