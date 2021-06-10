// LIVESCORE

nodecg.listenFor('startMessage', () => {
    nodecg.log.info('Start Message received!');
    start();
    nodecg.sendMessage('startReceived');
});

nodecg.listenFor('resetMessage', () => {
    nodecg.log.info('Reset Message received!');
    reset();
    nodecg.sendMessage('resetReceived');
});

nodecg.listenFor('pauseMessage', () => {
    nodecg.log.info('Pause Message received!');
    pauseandlog();
    nodecg.sendMessage('pauseReceived');
});

// OVERTIME

nodecg.listenFor('overtimeBoxShowMessage', () => {
	nodecg.log.info('OvertimeBox Message received!');
	showOvertime();
});

nodecg.listenFor('overtimeBoxHideMessage', () => {
	nodecg.log.info('OvertimeBox Message received!');
	hideOvertime();
});
