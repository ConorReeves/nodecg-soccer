// Toggle Appearance
function scoreBugBoxToggle() {
	var scoreBugBoxEl = document.getElementById("scorebugbox");
	if (scoreBugBoxEl.classList.contains("hide")) {
		scoreBugBoxEl.classList.remove("hide");
	} else {
		scoreBugBoxEl.classList.add("hide");
	}
}

nodecg.listenFor('hideScoreBug', () => {
	nodecg.log.info('Hide Scoreboard Message received!');
	scoreBugBoxToggle();
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

