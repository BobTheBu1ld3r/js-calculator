const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

buttons.forEach(e=>e.addEventListener("click", showNumber))



let text = "";
let operator = "";
let display = 0;
let operand0 = 0;

function showNumber(clickEvent) {
    const input = clickEvent.target.textContent;

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
        text+= clickEvent.target.textContent;

    }

    if(input!=="=")display+= clickEvent.target.textContent;
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