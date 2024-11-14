const elemmentTypes = ["div", "p", "button"];

//Function to generate random element
function generateRandomElement() {
    const elemmentType= elemmentTypes[Math.floor(Math.random() * elemmentTypes.length)];
    const element = document.createElement(elemmentType);
    element.innerText = "Click me";
    return element;
}

//Function to add a random e to game container
function addElement() {
    const gameContainer = document.getElementById("game-container");
    const newElement = generateRandomElement();
    gameContainer.appendChild(newElement);
}

//Call function
addElement();

