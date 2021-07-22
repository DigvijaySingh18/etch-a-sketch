const container = document.querySelector("#container");

const body = document.querySelector("body");
// let noOfDivs = 256;

let rowDivs = 16;
let columnDivs = 16;

function createDiv(rowDiv, columnDiv){
    for (let i=0; i<rowDiv*columnDiv; i++){
        let newDiv = document.createElement("div");
        newDiv.setAttribute('class', 'div');
        container.appendChild(newDiv);
    }
    container.style.gridTemplateColumns = `repeat(${columnDiv}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rowDiv}, 1fr)`;
}

createDiv(rowDivs, columnDivs);





const sketchDivs = document.querySelectorAll(".div");

sketchDivs.forEach( sketchDiv => sketchDiv.addEventListener('mouseenter', addColor))

function addColor(e){
    console.log(e.target);
    e.target.setAttribute("class", "colorDiv")
}

const resetPad = document.createElement('button');
resetPad.innerHTML = "Reset";
resetPad.setAttribute("style", "height: 30px; width: 60px;")
body.insertBefore(resetPad, container);

resetPad.addEventListener("click", () => {removeColor();
    replaceDivs();
});


function removeColor(){
    sketchDivs.forEach( sketchDiv => sketchDiv.removeAttribute("class"))
}

function replaceDivs(){
    rowDivs = parseInt(prompt("How many row Divs do u want?"));
    columnDivs = parseInt(prompt("How many Column Divs do u want?"));
    console.log(rowDivs, columnDivs);

    if (rowDivs > 100 || columnDivs > 100){
        alert('Value Greater than 100\nMaximum allowed value is 100');
        return;
    }
    let childDivs = container.querySelectorAll('div');
    childDivs.forEach(childDiv => container.removeChild(childDiv));
    // container.removeChild('div');
    createDiv(rowDivs, columnDivs);
    let addDivs = document.querySelectorAll(".div");
    addDivs.forEach(addDiv => addDiv.addEventListener('mouseenter', addColor));
}