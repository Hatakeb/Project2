let content = document.getElementsByClassName("Text")[0];
content.textContent = "<h1>This content is to test innerHTML property</h1>"

//let content = document.getElementsByClassName("Text")[0];
//content.innerHTML = "<h1>This content is to test innerHTML property</h1>"

// JS can change HTML Attribute
//Syntax
//Element.attribute = "new attribute value"

function imageChange(){
    let imageElement = document.getElementById("img1");
    imageElement.src="../Project1/jeff.jfif";
    imageElement.style.width="150px";
    imageElement.style.height="150px";
}

//JS can create HTML Elements
//Syntax
let element1=document.createElement("h1")
let text=document.createTextNode("This is to show how JS can create HTML Elements")
element1.appendChild(text);
content.appendChild(element1);

let list1=document.getElementById("fruits")
let item1=document.getElementById("item1")
//list1.removeChild(item1)
let itemElement=document.createElement("li")
let itemText=document.createTextNode("Apple")
itemElement.appendChild(itemText);
list1.insertBefore(itemElement)