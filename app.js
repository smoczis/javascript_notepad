var list = document.createElement("ul");
var wrapper = document.getElementById("wrapper");
wrapper.appendChild(list);
var listElement = document.createElement("li");
list.appendChild(listElement);
listElement.innerHTML = "Paryż";

var addBtn = document.createElement("button");
addBtn.innerHTML = "Create new element";
wrapper.appendChild(addBtn);

addBtn.addEventListener("click", function () {
    var newListElement = document.createElement("li");
    list.appendChild(newListElement);
    newListElement.innerHTML = "New City";
}, false);






console.log(listElement);
console.log(wrapper);
console.log(list);