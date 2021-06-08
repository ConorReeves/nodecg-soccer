function hideAllLineup() {
	var lineupDivEl = document.getElementById("lineupDiv");
	if (lineupDivEl.classList.contains("hide")) {
		lineupDivEl.classList.remove("hide");
	} else {
		lineupDivEl.classList.add("hide");
	}
}



nodecg.listenFor('hideAllLineupMessage', () => {
	nodecg.log.info("Hide All Lineup Message Received = ");
	hideAllLineup()
});


