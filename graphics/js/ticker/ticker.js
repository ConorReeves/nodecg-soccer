function tickerBugBoxToggle() {
	let tickerBugBoxEl = document.getElementById("tickerDiv");
	if (tickerBugBoxEl.classList.contains("hide")) {
		tickerBugBoxEl.classList.remove("hide");
	} else {
		tickerBugBoxEl.classList.add("hide");
	}
}
	nodecg.listenFor('tickerBoxToggleMessage', () => {
		nodecg.log.info('Ticker Toggle Message received!');
		tickerBugBoxToggle()
	});


nodecg.listenFor('tickerBoxValue', (data) => {
	nodecg.log.info("Ticker Text Received = "+data);
	document.getElementById('tickerChars').innerHTML = data;
});
