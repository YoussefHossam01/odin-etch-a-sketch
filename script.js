// Select body and button to manipulate
const body = document.querySelector("body");
const button = document.createElement("button")
    button.textContent = "Change Grid Size";

// Initial grid size and container width
let gridSize = 16;
let cotainerWidth = 550;

// Dynamic Grid Size
button.addEventListener("click", () =>{
    let newGridSize = +prompt("Enter the required grid size:");
    gridSize = newGridSize;
    body.replaceChildren();
    gridCreate();
})


// Create a grid size by grid size grid dynamically.
function gridCreate(){
    body.appendChild(button);
    for (let i = 0; i < gridSize; i++){

        // Each grid line is its own container
        const container = document.createElement("div");
        container.className = "container"
        body.appendChild(container);
        // Ensuring square divs in each container no matter the size
        let containerHeight = cotainerWidth / gridSize;
        container.style.height = `${containerHeight}px`;

        for (let j = 0; j < gridSize; j++){
            // create the basic square Div element
            const squareDiv = document.createElement("div");
            squareDiv.className = "square";
            container.appendChild(squareDiv);

            // Change square colors with motion
            squareDiv.addEventListener("mouseenter", () => {
                squareDiv.style.backgroundColor = 'red'
            });

            squareDiv.addEventListener("mouseleave", () => {
                squareDiv.style.backgroundColor = 'blue'
            });
            container.appendChild(squareDiv);
        }
    }
}

gridCreate();