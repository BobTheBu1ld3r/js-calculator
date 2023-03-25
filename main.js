const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");

buttons.forEach(e=>e.addEventListener("click", showNumber))


function showNumber(clickEvent) {
    screen.textContent += clickEvent.target.textContent;
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