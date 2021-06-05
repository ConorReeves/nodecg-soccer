function tickerBugBoxToggle() {
	let box = document.getElementById("tickerdiv");
	if (box.style.display === "none") {
		box.style.display = "block";
	} else {
		box.style.display = "none";
	}
}
	nodecg.listenFor('tickerBoxToggleMessage', (data) => {
		nodecg.log.info('Ticker Toggle Message received!');
		tickerBugBoxToggle()
	});


nodecg.listenFor('tickerBoxValue', (data) => {
	nodecg.log.info("Ticker Text Received = "+data);
	document.getElementById('tickerChars').innerText = data;
});
