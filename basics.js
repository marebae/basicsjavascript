
let counter = 0;

function tickUp() {
    counter++;
    document.getElementById("counter").textContent = counter;
}

function tickDown() {
    counter--;
    document.getElementById("counter").textContent = counter;
}


function runForLoop() {
    let result = "";
    for (let i = 0; i <= counter; i++) {
        result += i;
        if (i < counter) {
            result += " ";
        }
    }
    document.getElementById("forLoopResult").textContent = result;
}


function showOddNumbers() {
    let result = "";
    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {
            result += i;
            if (i + 2 <= counter) {
                result += " ";
            }
        }
    }
    document.getElementById("oddNumberResult").textContent = result;
}


function addMultiplesToArray() {
    let multiplesArray = [];
    
   
    for (let i = counter; i >= 5; i--) {
        if (i % 5 === 0) {
            multiplesArray.push(i);
        }
    }
    
    
    console.log(multiplesArray);
}


function printCarObject() {
    
    let carType = document.getElementById("carType").value;
    let carMPG = document.getElementById("carMPG").value;
    let carColor = document.getElementById("carColor").value;
    
    
    let carObject = {
        cType: carType,
        cMPG: carMPG,
        cColor: carColor
    };
    
    
    console.log(carObject);
}


function loadCar(carNumber) {
    let car;
    
    
    if (carNumber === 1) {
        car = carObject1;
    } else if (carNumber === 2) {
        car = carObject2;
    } else if (carNumber === 3) {
        car = carObject3;
    }
    
    
    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

s
function changeColor(colorNumber) {
    let paragraph = document.getElementById("styleParagraph");
    
    if (colorNumber === 1) {
        paragraph.style.color = "red";
    } else if (colorNumber === 2) {
        paragraph.style.color = "green";
    } else if (colorNumber === 3) {
        paragraph.style.color = "blue";
    }
}