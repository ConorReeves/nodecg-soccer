function sendHideTicker() {
	nodecg.sendMessage('hideTickerBugBoxMessage');
	nodecg.log.info('Hide Ticker Box Message sent!');
}

function sendShowTicker() {
	nodecg.sendMessage('showTickerBugBoxMessageMessage');
	nodecg.log.info('Show Ticker Box Message sent!');
}



// Changing Text
const inputValuePath = document.getElementById("tickerTextValue");
function submitTickerValue() {
	let realInputVal = inputValuePath.value;
	nodecg.sendMessage('tickerBoxValue', realInputVal);
	nodecg.log.info("Ticker Text Sent = "+realInputVal);
}


