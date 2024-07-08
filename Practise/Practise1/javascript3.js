function newTask(){
    var input=document.getElementById("newTask").value
    let list=document.getElementById("list")
    let itemElement=document.createElement("li")
    let itemText=document.createTextNode(input)
    itemElement.appendChild(itemText)
    list.appendChild(itemElement)
    let ItemElement=document.createElement("button")
    let ItemText=document.createTextNode("Done")
    ItemElement.appendChild(ItemText)
    list.appendChild(ItemElement)
    let iTemElement=document.createElement("button")
    let iTemText=document.createTextNode("Delete")
    iTemElement.appendChild(iTemText)
    list.appendChild(iTemElement)
}