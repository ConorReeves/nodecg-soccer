'use strict';
// Timer vars
var minute = 0;
var second = 0;
var millisecond = 0;

'use strict';
// Timer fncs
let cron;

function start() {
    nodecg.log.info('Timer Started!')
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

function setTo45() {
	minute = 45;
	second = 0;
	document.getElementById('minute').innerText = '45';
	document.getElementById('second').innerText = '00';
	nodecg.log.info('Timer Set to 45:00')
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

// Set Timer Val from Panel

nodecg.listenFor('timeBoxValue', (data) => {
	nodecg.log.info("Time Received = "+data);
	const timeData = data;
	const timeMinuteChars = timeData.substring(0,2);
	const timeSecondChars = timeData.substring(3,5);
	document.getElementById('minute').innerText = timeMinuteChars;
	minute = timeMinuteChars;
	document.getElementById('second').innerText = timeSecondChars;
	second = timeSecondChars;
		});

nodecg.listenFor('setTo45Message', (data) => {
	nodecg.log.info("Set to 45 Message Received");
	setTo45();
});
