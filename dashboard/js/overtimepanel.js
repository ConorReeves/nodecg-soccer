function toggleOvertimeBox() {
	nodecg.sendMessage('overtimeBoxToggleMessage');
	nodecg.log.info('OvertimeBox Message sent!');
}

nodecg.listenFor('overtimeBoxToggleReceived', () => {
	nodecg.log.info('OvertimeBox Acknowledgement received!');
});



$(".toggleOvertimeCheckbox").change(function() {
	if(this.checked) {
		toggleOvertimeBox();
	} else {
		toggleOvertimeBox();
	}
});
