let timer;
let isRunning = false;

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    const timeInput = document.getElementById('time-input');
    let time = parseInt(timeInput.value) || 0;
    timer = setInterval(() => {
        if (time <= 0) {
            clearInterval(timer);
            isRunning = false;
        } else {
            time--;
            displayTime(time);
        }
    }, 10000);
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    displayTime(0);
}

function displayTime(time) {
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    document.getElementById('time-display').textContent = `${hours}:${minutes}:${seconds}`;
}

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
}
