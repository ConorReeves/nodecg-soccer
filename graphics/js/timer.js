'use strict';

let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

function start() {
    nodecg.log.info('Timer Started')
    pause();
    cron = setInterval(() => {
        timer();
    }, 10);
}

function pause() {
    clearInterval(cron);
}

function reset() {
    minute = 0;
    second = 0;
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    nodecg.log.info('Timer Reset')
}

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
}

function returnData(input) {
    return input > 9 ? input : `0${input}`
}

function pauseandlog() {
    clearInterval(cron);
    nodecg.log.info('Timer Paused')
}