
const helloNode = document.createElement("h1");
helloNode.textContent = "Hello World";

const myName = document.createElement("h2");
myName.textContent = "Luis Ernesto Chavez";

document.getElementById("root").appendChild(helloNode);
document.getElementById("root").appendChild(myName);