// Toggle Appearance

function scoreBugBoxToggle() {
	let box = document.getElementById("scorebugbox");
	if (box.style.display === "none") {
		box.style.display = "block";
	} else {
		box.style.display = "none";
	}
}


nodecg.listenFor('hideScoreBug', (data) => {
	nodecg.log.info('Hide Scoreboard Message received!');
	scoreBugBoxToggle();
});
