function toggleTicker() {
	nodecg.sendMessage('tickerBoxToggleMessage');
	nodecg.log.info('Ticker Box Message sent!');
}

const toggleTickerPath = document.getElementById("toggleTickerCheckbox");

function tickerBoxChange() {
	if (toggleTickerPath.checked) {
		toggleTicker();
	} else {
		toggleTicker();
	}

}

// Changing Text
const inputValuePath = document.getElementById("tickerTextValue");
function submitTickerValue() {
	let realInputVal = inputValuePath.value;
	nodecg.sendMessage('tickerBoxValue', realInputVal);
	nodecg.log.info("Ticker Text Sent = "+realInputVal);
}


