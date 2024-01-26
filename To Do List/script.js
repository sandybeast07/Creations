const text = document.getElementById("textBox");
const button = document.getElementById("button");
const listItem = document.getElementById("taskList");
const cross = document.querySelector("span");
button.addEventListener("click", () => {
  if (text.value === "") {
    alert("You must type something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = text.value;
    listItem.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  text.value = "";
});

listItem.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
  }
});

//yo

