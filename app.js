const container = document.querySelector(".container");

const heading = document.createElement("h1");
heading.innerText = "Sticky Notes";

container.appendChild(heading);

//from branch feature2

/* add input field and add button */

const main = document.createElement("div");
main.classList.add("main");

container.appendChild(main);

const inputContainer = document.createElement("div");
inputContainer.classList.add("input-container");

main.appendChild(inputContainer);

const inputField = document.createElement("textarea");
inputField.placeholder = "Type a new note...";

inputContainer.appendChild(inputField);

const addBtn = document.createElement("button");
addBtn.innerText = "+";

inputContainer.appendChild(addBtn);

addBtn.addEventListener("click", ()=>{
    const notesContent = inputField.value;
    console.log(notesContent);
});