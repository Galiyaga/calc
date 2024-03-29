let lastOperand = 0;
let operation = null;
const inputWindow = document.getElementById('inputWindow');

function handleOperationClick(op) {
    lastOperand = parseInt(inputWindow.value);
    operation = op;
    inputWindow.value = '';
}

function calculateResult() {
    let result = 0;
    switch(operation) {
        case 'sum':
            result = lastOperand + parseInt(inputWindow.value);
            break;
        case 'def':
            result = lastOperand - parseInt(inputWindow.value);
            break;
    }
    operation = null;
    lastOperand = 0;
    inputWindow.value = result;
}

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})

document.getElementById('btn_sum').addEventListener('click', function () {
    handleOperationClick('sum');
})

document.getElementById('btn_def').addEventListener('click', function () {
    handleOperationClick('def');
})

document.getElementById('btn_calc').addEventListener('click', calculateResult);

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})