function toggleOvertimeBox() {
	nodecg.sendMessage('overtimeBoxToggleMessage');
	nodecg.log.info('OvertimeBox Message sent!');
}

nodecg.listenFor('overtimeBoxToggleReceived', () => {
	nodecg.log.info('OvertimeBox Acknowledgement received!');
});

function sendOvertimeValue() {
	const inputValue = document.querySelector("#overtimeSetBox");
	let realInput = inputValue.value;
	alert("Overtime sent = "+realInput);
	nodecg.sendMessage('overtimeBoxValue', realInput);
}

$(".toggleOvertimeCheckbox").change(function() {
	if(this.checked) {
		toggleOvertimeBox();
	} else {
		toggleOvertimeBox();
	}
});
