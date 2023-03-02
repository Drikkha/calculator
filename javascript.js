const numbers = document.querySelectorAll(".numbers button");
const display = document.querySelector(".result");
const operators = document.querySelectorAll(".operators button");let operator;

let op;
let num1 = "";
let num2 = "";

function add(num1, num2){
    return num1 + num2;
}

function mul(num1, num2){
    return num1 * num2;
}

function div(dividend, divisor){
    if(divisor == 0) return "ERROR!"
    else return dividend/divisor;
}

function sub(num1, num2){
    return num1 - num2;
}

function operate(e){
    if((op || this.textContent == "=") && (num1 !== "") && (num2 !== "")){
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        console.log(op);
        switch(op){
            case "+":  displayResult(add(num1, num2))
                       break; 
            case "-":  displayResult(sub(num1, num2));
                       break; 
            case "%":  displayResult(div(num1, num2));
                       break; 
            case "x":  displayResult(mul(num1, num2));
                       break; 
        }
        op = undefined;
    } else if(this.textContent == "CLEAR"){
        num1 = "";
        num2 = "";
        op = undefined;
        displayResult("");
    }
    else if(e.textContent !== "=") op = this.textContent;
}

function displayResult(num){
    display.textContent = num.toFixed(2);
    num1 = num;
    num2 = "";
    console.log(num);
}


function displayNumbers(e){
    if(op){
        num2 = num2 + this.textContent;
        display.textContent = num2
        console.log(num2);
    }
    else{
        num1 = num1 + this.textContent;
        display.textContent = num1
        console.log(num1);
    }
}

numbers.forEach(number => number.addEventListener("click", displayNumbers));
operators.forEach(operator => operator.addEventListener("click", operate));

