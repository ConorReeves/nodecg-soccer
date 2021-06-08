let team1Points = 0
let team2Points = 0

const team1PointsRep = nodecg.Replicant('team1Points');
const team2PointsRep = nodecg.Replicant('team2Points');


var currPoints1Value = document.getElementById("teamPoints1");
var currPoints2Value = document.getElementById("teamPoints2");

function addPointTo1() {
	team1Points ++;
	currPoints1Value.innerText = team1Points;
	team1PointsRep.value = team1Points;
	return 'Added Point to Team 1';
}

function minusPointTo1() {
	team1Points --;
	currPoints1Value.innerText = team1Points;
	team1PointsRep.value = team1Points;
	return 'Minus Point to Team 1';
}

function addPointTo2() {
	team2Points ++;
	currPoints2Value.innerText = team2Points;
	team2PointsRep.value = team2Points;
	return 'Add Point to Team 2';
}

function minusPointTo2() {
	team2Points --;
	currPoints2Value.innerText = team2Points;
	team2PointsRep.value = team2Points;
	return 'Minus Point to Team 2';
}

function restorePoints() {
	currPoints1Value.innerText = team1PointsRep.value;
	currPoints2Value.innerText = team2PointsRep.value;
	return 'Restored Points';
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

nodecg.listenFor('restorePointsFromRep', () => {
	nodecg.log.info('restorePointsFromRep Message received!');
	restorePoints();
});





