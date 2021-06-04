function hideOvertime() {
	let box = document.getElementById("overtimebox");
	if (box.style.display === "none") {
		box.style.display = "block";
	} else {
		box.style.display = "none";
	}
}

nodecg.listenFor('overtimeBoxValue', (data) => {
	nodecg.log.info("Overtime Received = "+data);
	const overTimeData = data;
	const overtimeMinuteChars = overTimeData.substring(0,2);
	const overtimeSecondChars = overTimeData.substring(3,5);
	document.getElementById('overtimeMinute').innerText = "+"+overtimeMinuteChars;
	document.getElementById('overtimeSecond').innerText = overtimeSecondChars;
});
