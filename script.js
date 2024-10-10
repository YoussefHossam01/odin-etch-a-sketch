// Select body to manipulate
const body = document.querySelector("body");

const GRIDSIZE = 16;
let cotainerWidth = 550;

// Create a grid size by grid size grid dynamically.
for (let i = 0; i < GRIDSIZE; i++){
    // Each grid line is its own container
    const container = document.createElement("div");
    container.className = "container"
    body.appendChild(container);
    let containerHeight = cotainerWidth / GRIDSIZE;
    container.style.height = `${containerHeight}px`;
    for (let j = 0; j < GRIDSIZE; j++){
        // create the basic square Div element
        const squareDiv = document.createElement("div");
        squareDiv.className = "square";
        container.appendChild(squareDiv);

        squareDiv.addEventListener("mouseenter", () => {
            squareDiv.style.backgroundColor = 'red'
        });

        squareDiv.addEventListener("mouseleave", () => {
            squareDiv.style.backgroundColor = 'blue'
        });
        container.appendChild(squareDiv);

        squareDiv.addEventListener("pointerenter", () => {
            squareDiv.style.backgroundColor = 'red'
        });

        squareDiv.addEventListener("pointerleave", () => {
            squareDiv.style.backgroundColor = 'blue'
        });
    }
}
