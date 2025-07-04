console.log('hello from script');

// Create a webpage with a 16x16 grid of square divs, make 3x3 grid
let divContainer = document.querySelector('.divContainer');

let rowContainer; // used to store the divs in a row
let squareDiv; // used to store the boxes that's in the row container

let mouseDown = false; // used to check if the mouse button is down

let num = 1; // used to store the value of each box

// defult color is purple but can be changed later
let boxColor = 'background-color: rgb(110, 47, 112);'; 

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

            squareDiv.addEventListener("mouseenter", (e) =>  // change color when mouse enters box
            {
                // if (mouseDown)
                // {
                //     if (rainbowColorOn)
                //         randomColor(e);
                //     else
                //         colorBox(e);
                // }

                if (mouseDown)
                    whichColor(e);
            });  

            squareDiv.addEventListener("mousedown", (e) =>  // now boxes color when right mouse is down
            {
                // if (rainbowColorOn)
                //         randomColor(e);
                //     else
                //         colorBox(e);
                whichColor(e);
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
    e.target.style.cssText = boxColor;
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


// adding rainbow mode
/**
 * notes: use random number generator for numbers in rgb(110, 47, 112)
 */
let rainbowBtn = document.querySelector("#rainbowBtn");
let rainbowColorOn = false; // used for rainbow switch later

// returns a number from 0 to max-1
function randomNum()
{
    //return Math.floor(Math.random() * max) + 1; // returns 1 through max, ex: max = 10 => 1-10
    return Math.floor(Math.random() * 256); // if max = 10, returns 0-9
}

// returns a random color
function randomColor(e)
{
    e.target.style.cssText = `background-color: rgb(${randomNum()}, ${randomNum()}, ${randomNum()});`;
}

function whichColor(e)
{
    if (rainbowColorOn)
        randomColor(e);
    else
        colorBox(e);
}

/**
 * switch button to turn on or off the rainbow color 
 */
rainbowBtn.addEventListener("click", () =>
{
    if (!rainbowColorOn)
    {
        rainbowColorOn = true;
        rainbowBtn.textContent = "Rainbow: on";
    } 
    else  
    {
        rainbowColorOn = false;
        rainbowBtn.textContent = "Rainbow: off";
    }

    console.log("rainbow button clicked " + rainbowColorOn)
});


// lets you change the color that you use
function printColor(ev) 
{
    const color = ev.target.value
    const r = parseInt(color.substr(1,2), 16)
    const g = parseInt(color.substr(3,2), 16)
    const b = parseInt(color.substr(5,2), 16)
    console.log(`red: ${r}, green: ${g}, blue: ${b}`)

    boxColor = `background-color: rgb(${r}, ${g}, ${b});`
};


// clears the grid
let clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener("click", () =>
{
    console.log("clear button clicked");
    divContainer.textContent = ''; // removing the grid
    makeGrid(size);
});

