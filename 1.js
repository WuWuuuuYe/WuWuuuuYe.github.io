let currentInput = '';

function inputValue(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }