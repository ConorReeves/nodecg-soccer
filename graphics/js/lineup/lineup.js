function hideAllLineup() {
	var lineupDivEl = document.getElementById("lineupDiv");
	lineupDivEl.classList.add("hide");

}

function showAllLineup() {
	var lineupDivEl = document.getElementById("lineupDiv");
	lineupDivEl.classList.remove("hide");
}

nodecg.listenFor('hideAllLineupMessage', () => {
	nodecg.log.info("Hide All Lineup Message Received = ");
	hideAllLineup()
});

nodecg.listenFor('showAllLineupMessage', () => {
	nodecg.log.info("Hide All Lineup Message Received = ");
	showAllLineup()
});
