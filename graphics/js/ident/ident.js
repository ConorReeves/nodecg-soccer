// Starting Full Ident

function hideFullIdent() {
	document.querySelector("#matchFullIdent").classList.add("hide");
}

function showFullIdent() {
	document.querySelector("#matchFullIdent").classList.remove("hide");
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
	document.querySelector("#halftimeIdent").classList.add("hide");
}

function showHalftimeIdent() {
	document.querySelector("#halftimeIdent").classList.remove("hide");
}

nodecg.listenFor('hideHalftimeIdent', () => {
	nodecg.log.info("Hide Halftime Ident Message Received");
	hideHalftimeIdent()
});

nodecg.listenFor('showHalftimeIdent', () => {
	nodecg.log.info("Show Halftime Ident Message Received");
	showHalftimeIdent()
});

// Ident Lower-Third

function hideIdentLowerThird() {
	document.querySelector("#identLowerThird").classList.add("hide");
}

function showIdentLowerThird() {
	document.querySelector("#identLowerThird").classList.remove("hide");
}

nodecg.listenFor('hideIdentLowerThird', () => {
	nodecg.log.info("Hide Ident LowerThird Message Received");
	hideIdentLowerThird()
});

nodecg.listenFor('showIdentLowerThird', () => {
	nodecg.log.info("Show Ident LowerThird Message Received");
	showIdentLowerThird()
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
