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

function sendHideScoreBoard() {
	nodecg.sendMessage('hideScoreBug');
	nodecg.log.info('Hide Scoreboard Message sent!');
}

// Receiving Messages

nodecg.listenFor('startReceived', () => {
    nodecg.log.info('Start Acknowledgement received!');
});
nodecg.listenFor('pauseReceived', () => {
    nodecg.log.info('Pause Acknowledgement received!');
});
nodecg.listenFor('resetReceived', () => {
    nodecg.log.info('Reset Acknowledgement received!');
});

