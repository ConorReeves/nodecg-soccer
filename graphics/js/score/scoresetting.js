const team1Points = nodecg.Replicant('team1Points');
const team2Points = nodecg.Replicant('team2Points');

var currPoints1Value = document.querySelector("#teamPoints1");
var currPoints2Value = document.querySelector("#teamPoints2");

function addPointTo1() {
	team1Points.value ++;
	currPoints1Value.innerText = team1Points.value;
	team1Points.value = team1Points;
}

function minusPointTo1() {
	team1Points.value --;
	currPoints1Value.innerText = team1Points;
	team1Points.value = team1Points;
}

function addPointTo2() {
	team2Points.value ++;
	currPoints2Value.innerText = team2Points;
	team2Points.value = team2Points;
}

function minusPointTo2() {
	team2Points.value --;
	currPoints2Value.innerText = team2Points;
	team2Points.value = team2Points;
}

function restoreToReplicant() {
	currPoints1Value.innerText = team1Points.value;
	currPoints2Value.innerText = team2Points.value;
	return true;
}

nodecg.listenFor('addPointToTeam1', () => {
	nodecg.log.info('addPointToTeam1 Message received!');
	addPointTo1();
});

nodecg.listenFor('minusPointToTeam1', () => {
	nodecg.log.info('addPointToTeam1 Message received!');
	minusPointTo1();
});

nodecg.listenFor('addPointToTeam2', () => {
	nodecg.log.info('addPointToTeam1 Message received!');
	addPointTo2();
});

nodecg.listenFor('minusPointToTeam2', () => {
	nodecg.log.info('addPointToTeam1 Message received!');
	minusPointTo2();
});


