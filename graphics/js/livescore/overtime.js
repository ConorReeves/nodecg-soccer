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
	//document.body.innerHTML = document.body.innerHTML.replace('hello', 'hi');
	alert(document.querySelector("#overtimebox").value)
});
