function hideOvertime() {
	let overtimeBox = document.querySelector("#overtimeBox");
		overtimeBox.classList.add("hide");
}

function showOvertime() {
	let overtimeBox = document.querySelector("#overtimeBox");
		overtimeBox.classList.remove("hide");
}

nodecg.listenFor('overtimeBoxValue', (data) => {
	nodecg.log.info("Overtime Received = "+data);
	const overTimeData = data;
	const overtimeMinuteChars = overTimeData.substring(0,2);
	const overtimeSecondChars = overTimeData.substring(3,5);
	document.getElementById('overtimeMinute').innerText = "+"+overtimeMinuteChars;
	document.getElementById('overtimeSecond').innerText = overtimeSecondChars;
});
