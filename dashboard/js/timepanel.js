function sendTimeValue() {
	const inputBox = document.querySelector("#timeSetBox");
	let realInput = inputBox.value;
	nodecg.sendMessage('timeBoxValue', realInput);
	nodecg.log.info("Time Value sent!")
}

function sendSetTo45() {
	nodecg.sendMessage('setTo45Message');
	nodecg.log.info("Set To 45 Message sent!")
}
