var hoursPara = document.getElementById("hours");
var mintPara = document.getElementById("min");
var secondPara = document.getElementById("second");
var milisecPara = document.getElementById("milisec");

var hour = 0;
var mints = 0;
var seconds = 0;
var milisec = 0;
var interval;

function stopWatch() {
    milisec++
    milisecPara.innerHTML = milisec;
    if (milisec == 100) {
        seconds++
        secondPara.innerHTML = seconds;
        milisec = 0;
    } else if (seconds == 60) {
        mints++
        mintPara.innerHTML = mints;
        seconds = 0;
    }
    else if (mints == 60) {
        hour++
        hoursPara.innerHTML = hour;
        mints = 0;
    }
}

function startBtn() {
    var button = document.getElementById("sBtn")
    var button2 = document.getElementById("dBtn")
    var button3 = document.getElementById("dBtn2")
    interval = setInterval(stopWatch, 10);
    button.disabled = true;
    button2.disabled = false;
    button3.disabled = false;
}
function stopBtn() {
    var button = document.getElementById("sBtn")
    var button2 = document.getElementById("dBtn")
    var button3 = document.getElementById("dBtn2")
    clearInterval(interval)
    button.disabled = false;
    button2.disabled = true;
    button3.disabled = false;

}

function resetBtn() {
    clearInterval(interval);
    milisecPara.innerHTML = 0;
    secondPara.innerHTML = 0;
    mintPara.innerHTML = 0;
    hoursPara.innerHTML = 0;
    hour = 0;
    mints = 0;
    seconds = 0;
    milisec = 0;
    var button = document.getElementById("sBtn")
    var button2 = document.getElementById("dBtn")
    var button3 = document.getElementById("dBtn2")
    button.disabled = false;
    button2.disabled = true;
    button3.disabled = true;

}