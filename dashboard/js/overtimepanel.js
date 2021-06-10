function showOvertimeBox() {
	nodecg.sendMessage('overtimeBoxShowMessage');
	nodecg.log.info('Show OvertimeBox Message sent!');
}

function hideOvertimeBox() {
	nodecg.sendMessage('overtimeBoxHideMessage');
	nodecg.log.info('Hide OvertimeBox Message sent!');
}

function sendOvertimeValue() {
	const inputValue = document.querySelector("#overtimeSetBox");
	let realInput = inputValue.value;
	nodecg.sendMessage('overtimeBoxValue', realInput);
}
