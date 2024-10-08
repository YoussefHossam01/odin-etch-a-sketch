// Select container to manipulate
const container = document.querySelector(".container");


const GRIDSIZE = 16;

// Create a grid size by grid size grid dynamically.
for (let i = 0; i < GRIDSIZE; i++){
    for (let j = 0; j < GRIDSIZE; j++){
        // create the basic square Div element
        const squareDiv = document.createElement("div");
        squareDiv.className = "square";
        container.appendChild(squareDiv);
    }
}