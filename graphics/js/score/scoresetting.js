var teamPoints1 = 0;
var teamPoints2 = 0;

var currPoints1Value = document.querySelector("#teamPoints1");
var currPoints2Value = document.querySelector("#teamPoints2");

function addPointTo1() {
	teamPoints1 ++;
	currPoints1Value.innerHTML = teamPoints1;
}

function minusPointTo1() {
	teamPoints1 --;
	currPoints1Value.innerHTML = teamPoints1;
}

function addPointTo2() {
	teamPoints2 ++;
	currPoints2Value.innerHTML = teamPoints2;
}

function minusPointTo2() {
	teamPoints2 --;
	currPoints2Value.innerHTML = teamPoints2;
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

