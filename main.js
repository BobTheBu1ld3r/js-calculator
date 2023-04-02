const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

buttons.forEach(e=>e.addEventListener("click", handleButtonClick));

window.addEventListener("keypress", handleKeyPress);

function handleButtonClick(clickEvent) {
    const input = clickEvent.target.textContent;
    handleInput(input);
}

function handleKeyPress (keyEvent) {
    const validInputs = Array.from(buttons).map(e=>e.textContent);
    const input = keyEvent.key;
    if(validInputs.includes(input)) handleInput(input);
}

let text = "";
let operator = null;
let display = "0";
let operand0 = 0;
let start = true;
screen.textContent = display;
let operand1 = null;
let isFirstCalc = true;


function handleInput(input) {

    if(isNumber(input)){
        if(start) {
            display = "";
            start = false;
            operand0 = null;
        }

        text+=input;
        display+=input
    }

    if(isOperation(input)){
        if(!operator){
            if(!start){
                operand0 = text;
                operator = input;
                text="";
                display+=input;
                isFirstCalc = false;
                console.log("it's the first calc");
            }

            else{
                operator = input;
                text="";
                display+=input;
                start = false;
            }
        }
        else{
            operand1 = text;
            const result = operate(+operand0, operator, +operand1)
            operand0 = result;
            operator = input;
            text="";
            operand1 = null;
            display= result+operator;
        }
    }
    
    if(isEquals(input) && !operand1){
        console.log("yes");
        operand1 = text;
        console.log(`operand0=${operand0}, operator=${operator}, operand1=${operand1}`);
        const result = operate(+operand0, operator, +operand1)
        operand0 = result;
        text="";
        operand1 = null;
        display= result;
        start = true;
        operator = null;
    }

    screen.textContent = display;
}


function operate(number1, operator, number2) {
    switch(operator){
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*":
            return number1 * number2;
        case "/":
            return number1 / number2;
    }
}

function isOperation(input) {
    return "+-*/".includes(input);
}

function isEquals (input) {
    return input==="=";
}

function isNumber(input) {
    return "0123456789".includes(input);
}