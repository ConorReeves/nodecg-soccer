function hideAllLineup() {
	var lineupDivEl = document.getElementById("lineupDivT1");
	lineupDivEl.classList.add("hide");
}

function showAllLineup() {
	var lineupDivEl = document.getElementById("lineupDivT1");
	lineupDivEl.classList.remove("hide");
}

function hideAllLineupT2() {
	var lineupDivEl = document.getElementById("lineupDivT2");
	lineupDivEl.classList.add("hide");
}

function showAllLineupT2() {
	var lineupDivEl = document.getElementById("lineupDivT2");
	lineupDivEl.classList.remove("hide");
}

function hideAllLineupSUB() {
	var lineupDivEl = document.getElementById("lineupDivSUB");
	lineupDivEl.classList.add("hide");
}

function showAllLineupSUB() {
	var lineupDivEl = document.getElementById("lineupDivSUB");
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
