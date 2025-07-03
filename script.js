console.log('hello from script');

// Create a webpage with a 16x16 grid of square divs, make 3x3 grid
let divContainer = document.querySelector('.divContainer');

let rowContainer;
let squareDiv;

let row = column = 16;

let num = 1; // used to store the value of each box

for (let i=1; i<=row; i++)
{
    rowContainer = document.createElement("div");
    rowContainer.classList.add("divRow"); // adds a new css class to this html element 
    //rowContainer.className = "divRow"; // className overwrites & replaces the css class

    for (let j=1; j<=column; j++)
    {
        squareDiv = document.createElement("div");
        //squareDiv.textContent = '';
        rowContainer.appendChild(squareDiv);
    }

    divContainer.appendChild(rowContainer);
}



