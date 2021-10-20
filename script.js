const numbers = document.querySelectorAll(".number");
const calcScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) =>{
    calcScreen.value = number
}


let prevNumber = '';
let CurrentNumber = '0';
let CalculationOperator = '';

const inputNumber = (number) =>{
    if(CurrentNumber === '0'){
        CurrentNumber = number
    }
    else{
        CurrentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click" , (event) => {
        inputNumber(event.target.value)
        updateScreen(CurrentNumber)
    })
});

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) =>{
    operator.addEventListener('click' , (event) =>{
        console.log(event.target.value)
    })
});

const inputOperator = (operator) =>{

    if(CalculationOperator === ''){
        prevNumber = CurrentNumber;
    }
    CalculationOperator = operator;
    CurrentNumber = '0';
}

operators.forEach((operator) =>{
    operator.addEventListener("click" , (event) =>{
        inputOperator(event.target.value)
    })
});

const equalSign = document.querySelector(".equal");

equalSign.addEventListener('click', ()=>{
    calculate()
    updateScreen(CurrentNumber)
});

const calculate = () =>{
    let result = ''

    switch(CalculationOperator){
        case '+':
        result = parseFloat(prevNumber) + parseFloat(CurrentNumber);
        break

        case '-':
        result = parseFloat(prevNumber) - parseFloat(CurrentNumber)
        break
        
        case '*':
        result = parseFloat(prevNumber) * parseFloat(CurrentNumber);
        break

        case '/':
        result = parseFloat(prevNumber) / parseFloat(CurrentNumber)
        break

        default:
            break

    }

    CurrentNumber = result
    CalculationOperator = ''
}

const clearBtn = document.querySelector('.clear')

const clearAll = () =>{
    prevNumber = ''
    CalculationOperator = ''
    CurrentNumber = '0'
}

clearBtn.addEventListener('click' , (event) =>{
    clearAll()
    updateScreen(CurrentNumber)
})

const decimal = document.querySelector('.decimal')

const inputDecimal = (dot) =>{
    
    if(CurrentNumber.includes(dot)){
        return
    }
    CurrentNumber += dot
}



decimal.addEventListener('click', (event) =>{
    inputDecimal()
    updateScreen(event)
})

