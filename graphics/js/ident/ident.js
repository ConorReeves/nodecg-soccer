// Starting Full Ident

function hideFullIdent() {
	document.querySelector("#matchFullIdent").style.display = "none";
}

function showFullIdent() {
	document.querySelector("#matchFullIdent").style.display = "block";
}


nodecg.listenFor('hideFullMatchIdent', () => {
	nodecg.log.info("Hide Full Match Ident Message Received");
	hideFullIdent()
});

nodecg.listenFor('showFullMatchIdent', () => {
	nodecg.log.info("Show Full Match Ident Message Received");
	showFullIdent()
});

// Halftime Full Ident Toggling

function hideHalftimeIdent() {
	document.querySelector("#halftimeIdent").style.display = "none";
}

function showHalftimeIdent() {
	document.querySelector("#halftimeIdent").style.display = "block";
}

nodecg.listenFor('hideHalftimeIdent', () => {
	nodecg.log.info("Hide Halftime Ident Message Received");
	hideHalftimeIdent()
});

nodecg.listenFor('showHalftimeIdent', () => {
	nodecg.log.info("Show Halftime Ident Message Received");
	showHalftimeIdent()
});

// Halftime Full Ident Text

// const team1PointsRep = nodecg.Replicant('team1Points'); // -- Already Declared Elsewhere on Page
// const team2PointsRep = nodecg.Replicant('team2Points'); // -- Already Declared Elsewhere on Page
//const timerMinutesRep = nodecg.Replicant('timerMinutes'); -- Already Declared Elsewhere on Page
//const timerSecondsRep = nodecg.Replicant('timerSeconds'); -- Already Declared Elsewhere on Page

team1PointsRep.on('change', (newValue) => {
	document.getElementById('teamPoints1HTIdent').innerText = `${newValue}`
});

team2PointsRep.on('change', (newValue) => {
	document.getElementById('teamPoints2HTIdent').innerText = `${newValue}`
});
