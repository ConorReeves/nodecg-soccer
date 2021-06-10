// Toggle Appearance
function hideScoreBugBox() {
	var scoreBugBoxEl = document.getElementById("scorebugbox");
		scoreBugBoxEl.classList.add("hide");
}

function showScoreBugBox() {
	var scoreBugBoxEl = document.getElementById("scorebugbox");
	scoreBugBoxEl.classList.remove("hide");
}

nodecg.listenFor('hideScoreBug', () => {
	nodecg.log.info('Hide Scoreboard Message received!');
	hideScoreBugBox();
});

nodecg.listenFor('showScoreBug', () => {
	nodecg.log.info('Show Scoreboard Message received!');
	showScoreBugBox();
});

// Change 3 Char Names

const team1Chars = nodecg.Replicant('team1Chars');
const team2Chars = nodecg.Replicant('team2Chars');

team1Chars.on('change', (newValue, oldValue) => {
	console.log(`team1Chars changed from ${oldValue} to ${newValue}`);
	document.getElementById('nameTeam1').innerHTML = newValue;
});

team2Chars.on('change', (newValue, oldValue) => {
	console.log(`team2Chars changed from ${oldValue} to ${newValue}`);
	document.getElementById('nameTeam2').innerHTML = newValue;
});

