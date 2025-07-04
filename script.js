console.log('hello from script');

// Create a webpage with a 16x16 grid of square divs, make 3x3 grid
let divContainer = document.querySelector('.divContainer');

let rowContainer; // used to store the divs in a row
let squareDiv; // used to store the boxes that's in the row container

let mouseDown = false; // used to check if the mouse button is down

let num = 1; // used to store the value of each box

function makeGrid(size = 16) // setting the defult value for a parameter to 16
{
    let row = column = size;
    //let num = 0;

    for (let i=1; i<=row; i++)
    {
        rowContainer = document.createElement("div");
        rowContainer.classList.add("divRow"); // adds a new css class to this html element 
        //rowContainer.className = "divRow"; // className overwrites & replaces the css class

        for (let j=1; j<=column; j++)
        {
            squareDiv = document.createElement("div");
            //squareDiv.textContent = ''; //num++;

            squareDiv.addEventListener("mousemove", (e) =>  
            {
                if (mouseDown)
                    colorBox(e);
            });  

            squareDiv.addEventListener("click", (e) =>  // now boxes color when clicked
            {
                colorBox(e);
            });  

            rowContainer.appendChild(squareDiv); // adding boxes to a row container
        }

        divContainer.appendChild(rowContainer); // adding the row to the div container
    };
}

// makes it so that you only color when you hold down right click
divContainer.addEventListener("mousedown", () => 
{
    //console.log("mouse down " + e.target);
    mouseDown = true;
});

// turn off coloring when right click is not down
divContainer.addEventListener("mouseup", () => 
{
    //console.log("mouse down " + e.target);
    mouseDown = false;
});


// colors in box
function colorBox(e)
{
    e.target.style.cssText = 'background-color: rgb(110, 47, 112);';
}

makeGrid(); // making the defult grid on screen

// adding popup asking for number of boxes & replacing the grid with new size
let btn = document.querySelector('#boxBtn');
let size; // used to store the grid size

btn.addEventListener("click", () =>
{
    do 
    {
        size = Number(prompt('Enter # of boxes per row/column, maximum 100', "16")); // returns string, converted to number
    }
    while(size > 100);
    
    console.log(typeof size + " " + size);

    divContainer.textContent = ''; // removing the grid

    // while (divContainer.firstChild) // other way of removing grid, removing last first bc it's faster in arrays
    // {
    //     divContainer.removeChild(divContainer.lastChild); 
    // }

    if (size <= 0 || Number.isNaN(size)) // gives size 16 if incorrect size
        size = 16;

    makeGrid(size);
});


/**
 * how to make it where it only colors when I hold the mouse down
 */





