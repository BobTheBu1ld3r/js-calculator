const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

buttons.forEach(e=>e.addEventListener("click", handleButtonClick));

window.addEventListener("keypress", handleKeyPress);

function handleButtonClick(clickEvent) {
    const input = clickEvent.target.textContent;
    showNumber(input);
}

function handleKeyPress (keyEvent) {
    const validInputs = Array.from(buttons).map(e=>e.textContent);
    const input = keyEvent.key;
    if(validInputs.includes(input)) showNumber(input);
}

let text = "";
let operator = "";
let display = 0;
let operand0 = 0;

function showNumber(input) {

    if("+-*/=".includes(input)) {

        if(!operand0 && input!=="="){
            console.log("in this part")
            operand0 = text;
            operator = input;
            text="";
        }

        else{
            operand1 = text;
            text = "";
            operand0 = operate(++operand0, operator, ++operand1);
            display = operand0;
            if(input!=="=") operator = input;


        }

    }
    else{
        text+= input;

    }

    if(input!=="=") display+= input;
    screen.textContent = display;
    console.log(text);
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

console.log(operate(10, "/", 5));