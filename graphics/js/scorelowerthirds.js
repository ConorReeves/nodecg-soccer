team1PointsRep.on('change', (newValue) => {
	document.getElementById('teamPoints1ScoreCenterLowerThird').innerText = `${newValue}`
});

team2PointsRep.on('change', (newValue) => {
	document.getElementById('teamPoints2ScoreCenterLowerThird').innerText = `${newValue}`
});

function hideScoreCenterLowerThird() {
	document.querySelector("#scoreCenterLowerThird").classList.add("hide");
}

function showScoreCenterLowerThird() {
	document.querySelector("#scoreCenterLowerThird").classList.remove("hide");
}

nodecg.listenFor('hideScoreCenterLowerThird', () => {
	nodecg.log.info("Hide scoreCenterLowerThird Message Received");
	hideScoreCenterLowerThird()
});

nodecg.listenFor('showScoreCenterLowerThird', () => {
	nodecg.log.info("Show scoreCenterLowerThird Message Received");
	showScoreCenterLowerThird()
});
