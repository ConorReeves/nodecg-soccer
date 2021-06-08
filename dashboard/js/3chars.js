var team1Chars = nodecg.Replicant('team1Chars');
var team2Chars = nodecg.Replicant('team2Chars');

function submit3Chars() {
	team1Chars.value = document.querySelector("#team1Chars").value;
	team2Chars.value = document.querySelector("#team2Chars").value;
}
