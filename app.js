var addBtn = document.querySelector(".add-employee-btn");
addBtn.addEventListener("click", function () {
    var li = document.createElement("li");
    var list = document.querySelector(".employee-list");
    var input = document.querySelector(".employee-name-input");
    li.innerHTML = input.value;
    list.appendChild(li);
}, false);
