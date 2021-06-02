// Date & Time Stuff
var today = new Date();
var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = time + ' ' + date;



nodecg.listenFor('startMessage', () => {
    start();
    nodecg.log.info("Start Message received @" + " " + dateTime);
    nodecg.sendMessage('startReceived');
});

nodecg.listenFor('resetMessage', () => {
    reset();
    nodecg.log.info("Reset Message received @" + " " + dateTime);
    nodecg.sendMessage('resetReceived');
});

nodecg.listenFor('pauseMessage', () => {
    pauseandlog();
    nodecg.log.info("Pause Message received @" + " " + dateTime);
    nodecg.sendMessage('pauseReceived');
});