let isNum1 = false
let num1String = ""
let num2String = ""
let operator = ''
let result = 0

let history = [];

let display = document.getElementById("display")

function addNumber(num){
    if (isNum1 === false){
        num1String += num
        console.log("Num1: ", num1String)
        display.textContent = num1String
    } else if (isNum1 === true){
        num2String += num
        console.log("Num2: ", num2String)
        display.textContent = num2String
    }
}

function addOperation(op){
    if (num1String !== ""){
        isNum1 = true
        operator = op
        display.textContent = operator  
        console.log("Operation: ", operator)
    } else {
        console.log("Enter first number!")
    }
    
}

function calculate(){
    let num1 = Number(num1String)
    let num2 = Number(num2String)
    let historyString = ""

    console.log(num1)
    console.log(num2)

    switch(operator){
        case '+':
            result = num1 + num2;
            historyString = num1String + operator + num2String + " = " + result
            console.log("History string: ", historyString)
            history.push(historyString)
            console.log(history)
            break;
        case '-':
            result = num1 - num2;
            historyString = num1String + operator + num2String + " = " + result
            console.log("History string: ", historyString)
            history.push(historyString)
            console.log(history)
            break;
        case '*':
            result = num1 * num2;
            historyString = num1String + operator + num2String + " = " + result
            console.log("History string: ", historyString)
            history.push(historyString)
            console.log(history)
            break;
        case '/':
            if (num2String == 0){
                display.textContent = "Ma Error!";
                console.log("Math Error: Divided by zero")
                break;
            } else{
                result = num1 / num2;
                historyString = num1String + operator + num2String + " = " + result
                console.log("History string: ", historyString)
                history.push(historyString)
                console.log(history)
                break;  
            }
        default:
            display.textContent = "Syn Error!";
            break;      
    }

    display.textContent = result

    isHistoryDisplayed = false;
    showHistory();
    
    num1String = ""
    num2String = ""
    isNum1 = false
    operator = ''
    result = 0
}

function ResetCalculator(){
    num1String = ""
    num2String = ""
    isNum1 = false
    operator = ''
    result = 0
    display.textContent = 0
    console.log("Calculator resetted!")
}

let isHistoryDisplayed = false
function showHistory(){
    if (isHistoryDisplayed === false){
        console.log("History: ", history)
        document.getElementById("history").textContent = history.join("\n")
        isHistoryDisplayed = true
    } else{
        document.getElementById("history").textContent = ""
        isHistoryDisplayed = false
    }
}


