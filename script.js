console.log('hello from script');

// Create a webpage with a 16x16 grid of square divs, make 3x3 grid
let divContainer = document.querySelector('.divContainer');

let rowContainer;
let squareDiv;

//let row = column = 16;

let num = 1; // used to store the value of each box

function makeGrid(size = 16) // setting the defult value for a parameter to 16
{
    let row = column = size;

    for (let i=1; i<=row; i++)
    {
        rowContainer = document.createElement("div");
        rowContainer.classList.add("divRow"); // adds a new css class to this html element 
        //rowContainer.className = "divRow"; // className overwrites & replaces the css class

        for (let j=1; j<=column; j++)
        {
            squareDiv = document.createElement("div");
            //squareDiv.textContent = '';

            squareDiv.addEventListener("mouseenter", (e) => 
            {
                console.log(e);
                e.target.style.cssText = 'background-color: rgb(110, 47, 112);';
            });   

            rowContainer.appendChild(squareDiv);
        }

        divContainer.appendChild(rowContainer);
    };
}

makeGrid();

// adding popup asking for number of boxes & replacing the grid with new size
let btn = document.querySelector('#boxBtn');
let size = 16;

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





