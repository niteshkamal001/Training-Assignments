function calculate() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;

    if (operation === '+') {
        document.getElementById('result').value = num1 + num2;
    }
    if (operation === '-') {
        document.getElementById('result').value = num1 - num2;
    }
    if (operation === '/') {
        document.getElementById('result').value = num1 / num2;
    }
    if (operation === 'X') {
        document.getElementById('result').value = num1 * num2;
    }

}