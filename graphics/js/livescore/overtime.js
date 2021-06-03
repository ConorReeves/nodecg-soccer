function hideOvertime() {
	let box = document.getElementById("overtimebox");
	if (box.style.display === "none") {
		box.style.display = "block";
	} else {
		box.style.display = "none";
	}
}

nodecg.listenFor('overtimeBoxValue', (data) => {
	nodecg.log.info(data);
});
