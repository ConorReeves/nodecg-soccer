const inputVal = document.getElementById("overtimeSet").value;

function toggleOvertimeBox() {
	nodecg.sendMessage('overtimeBoxToggleMessage');
	nodecg.log.info('OvertimeBox Message sent!');
}

nodecg.listenFor('overtimeBoxToggleReceived', () => {
	nodecg.log.info('OvertimeBox Acknowledgement received!');
});

function sendOvertimeValue() {
	nodecg.sendMessage('overtimeBoxValue', inputVal);
}

$(".toggleOvertimeCheckbox").change(function() {
	if(this.checked) {
		toggleOvertimeBox();
	} else {
		toggleOvertimeBox();
	}
});
