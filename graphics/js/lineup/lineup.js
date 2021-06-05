function hideAllLineup() {
	let box = document.getElementById("lineupDiv");
	if (box.style.display === "none") {
		box.style.display = "block";
	} else {
		box.style.display = "none";
	}
}

nodecg.listenFor('hideAllLineupMessage', () => {
	nodecg.log.info("Hide All Lineup Message Received = ");
	hideAllLineup()
});
