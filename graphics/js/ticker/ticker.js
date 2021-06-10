function hideTickerBugBox() {
	let overtimeBox = document.querySelector("#tickerDiv");
	overtimeBox.classList.add("hide");
}

function showTickerBugBox() {
	let overtimeBox = document.querySelector("#tickerDiv");
	overtimeBox.classList.remove("hide");
}


nodecg.listenFor('hideTickerBugBoxMessage', () => {
		nodecg.log.info('Hide Ticker Toggle Message received!');
	hideTickerBugBox()
});

nodecg.listenFor('showTickerBugBoxMessageMessage', () => {
	nodecg.log.info('Show Ticker Toggle Message received!');
	showTickerBugBox()
});


nodecg.listenFor('tickerBoxValue', (data) => {
	nodecg.log.info("Ticker Text Received = "+data);
	document.getElementById('tickerChars').innerHTML = data;
});
