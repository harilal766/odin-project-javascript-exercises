// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


const para = document.createElement("div");
para.classList.add("para");
para.textContent = "Hey I’m red!";
para.style.color = "red";

container.appendChild(para);


const heading = document.createElement("div");
heading.classList.add("heading");
heading.textContent = "I’m a blue h3!";
heading.style.color = "blue"

container.appendChild(heading);


const box = document.createElement("div");
box.style.border = "1px solid black";
box.style.padding = "10 px";


const boxHeading = document.createElement("h1");
boxHeading.textContent = "I'm in a div";

const boxPara = document.createElement("p");
boxPara.textContent = "ME TOO!";

container.appendChild(box);
box.appendChild(boxHeading);
box.appendChild(boxPara);

