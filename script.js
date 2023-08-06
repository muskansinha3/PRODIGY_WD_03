let currentExpression = '';

function appendToDisplay(value) {
    currentExpression += value;
    document.getElementById('result').value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        const result = eval(currentExpression);
        document.getElementById('result').value = result;
        currentExpression = String(result);
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentExpression = '';
    }
}
