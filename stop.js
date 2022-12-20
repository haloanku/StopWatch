let startBtn = document.getElementById('start');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lapBtn');
let lapRecord = document.getElementById('lapRecord');
let lapTg = document.getElementById('lapTag');
let secondTime = document.getElementById('second');
let miliSecTime = document.getElementById('miliSecond');
let seconds = '00';
let miliSec = '00';
let interval = null;
let btnStatus = 'Stopped';
let lapNow = null;

function startTimer() {
    miliSec++;
    console.log(miliSec);

    if (miliSec / 60 === 1) {
        miliSec = 0;
        seconds++;
        if (seconds / 60 === 1) {
            seconds = 0;
        }
    }
    miliSecTime.innerHTML = miliSec;
    secondTime.innerHTML = seconds;
}

startBtn.addEventListener('click', function startStop() {
    if (btnStatus === 'Stopped') {
        interval = window.setInterval(startTimer, 10);
        startBtn.textContent = 'Stop';
        btnStatus = 'Started';
        lapBtn.style.display = 'inline-block';
    }
    else if (btnStatus === 'Started') {
        window.clearInterval(interval);
        startBtn.textContent = 'Start';
        btnStatus = 'Stopped';
        resetBtn.style.display = 'inline-block';
    }
});

resetBtn.addEventListener('click', function reset() {
    secondTime.innerHTML = '00';
    miliSecTime.innerHTML = '00';
    miliSec = '00';
    seconds = '00';
    window.clearInterval(interval);
    btnStatus = 'Stopped';
    startBtn.innerHTML = 'Start';
    resetBtn.style.display = 'none';
    lapBtn.style.display = 'none';
    lapTg.style.display = 'none';
    lapRecord.innerHTML = '';
});

lapBtn.addEventListener('click', function lap() {
    lapNow = `<div class="lap">${seconds} : ${miliSec}</div>`;
    lapRecord.innerHTML += lapNow;
    lapRecord.style.textAlign = 'center';
    lapBtn.style.display = 'inline-block';
    lapTg.style.display = 'block';
    lapTg.style.textAlign = 'center';
});