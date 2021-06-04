function sendTimeValue() {
	const inputBox = document.querySelector("#timeSetBox");
	let realInput = inputBox.value;
	nodecg.sendMessage('timeBoxValue', realInput);
	nodecg.log.info("Time Value sent!")
}
