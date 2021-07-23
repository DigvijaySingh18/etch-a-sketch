function createDiv(rowDiv, columnDiv){
    for (let i=0; i<rowDiv*columnDiv; i++){
        let newDiv = document.createElement("div");
        newDiv.setAttribute('class', 'div');
        container.appendChild(newDiv);
    }
    container.style.gridTemplateColumns = `repeat(${columnDiv}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rowDiv}, 1fr)`;
}

function addColor(e){
    e.target.setAttribute("class", "colorDiv");
}

function replaceDivs(){
    rowDivs = parseInt(prompt("How many row Divs do u want?"));
    columnDivs = parseInt(prompt("How many Column Divs do u want?"));

    if (rowDivs > 100 || columnDivs > 100){
        alert('Value Greater than 100\nMaximum allowed value is 100');
        return;
    }

    let childDivs = container.querySelectorAll('div');
    childDivs.forEach(childDiv => container.removeChild(childDiv));
    createDiv(rowDivs, columnDivs);

    let addDivs = document.querySelectorAll(".div");
    addDivs.forEach(addDiv => addDiv.addEventListener('mouseenter', addColor));
}


function removeColor(){
    sketchDivs.forEach( sketchDiv => sketchDiv.removeAttribute("class"))
}



const container = document.querySelector("#container");
const body = document.querySelector("body");

let rowDivs = 16;
let columnDivs = 16;


createDiv(rowDivs, columnDivs);


const sketchDivs = document.querySelectorAll(".div");
sketchDivs.forEach( sketchDiv => sketchDiv.addEventListener('mouseenter', addColor))

const resetPad = document.createElement('button');
resetPad.innerHTML = "Reset";
resetPad.setAttribute("style", "height: 40px; width: 80px; margin-right: 60px;");
body.insertBefore(resetPad, container);

resetPad.addEventListener("click", () => {removeColor();
    replaceDivs();
});


const refreshPad = document.createElement('button');
refreshPad.innerHTML = "Refresh";
refreshPad.setAttribute("style", "height: 40px; width: 80px; margin-left: 60px");
body.insertBefore(refreshPad, container);

refreshPad.addEventListener("click", removeColor);