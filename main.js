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