function add(a, b) {
    return a + b;
}

let addResult = add(10, 5);
console.log("Sucet: ", addResult);

function calculate(a, b, operator) {
    if (operator === "+"){
        return a + b;
    } else if (operator === "-"){
        return a - b;
    } else if (operator === "*"){
        return a * b;
    } else if (operator === "/"){
        if (b == 0){
            return "Invalid number!";
        } else{
          return a / b;  
        }                                              
    } else {
        console.log("Invalid operation!");
    }
}

function calculateSwitch(a, b, operator) {
    switch(operator){
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b == 0){
                return "Invalid number!";
            } else{
                return a / b;  
            }
        default:
            return "Enter your numbers!";      
    }
}

function handleCalculate(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    let vysledok = calculateSwitch(num1, num2, operator);

    document.getElementById("result").textContent = vysledok;
}
