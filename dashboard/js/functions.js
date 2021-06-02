// Date & Time Vars
var today = new Date();
var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
var dateTime = time + ' ' + date;

// Sending Messages

function startTimer() {
    nodecg.sendMessage('startMessage');
    nodecg.log.info('Start Message sent!');
    startReceived = false;
}

function resetTimer() {
    nodecg.sendMessage('resetMessage');
    nodecg.log.info('Reset Message sent!');
    resetReceived = false;
}

function pauseTimer() {
    nodecg.sendMessage('pauseMessage');
    nodecg.log.info('Pause Message sent!');
    pauseReceived = false;
}

// Receiving Messages

nodecg.listenFor('resetReceived', () => {
    resetReceivedFunction()
});

function resetReceivedFunction() {
    if (resetReceived) {
        nodecg.log.info('Reset Acknowledgement received @' + ' ' + dateTime);
        $.Toast('Acknowledgement:','RESET ACKNOWLEDGED','success');
    }
}