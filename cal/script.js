function addtodis(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clendis() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    display.value = eval(display.value);
}