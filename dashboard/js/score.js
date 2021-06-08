function addScoreTeam1() {
	nodecg.sendMessage('addPointToTeam1');
	nodecg.log.info('Add Point to T1 Message sent!');
}

function minusScoreTeam1() {
	nodecg.sendMessage('minusPointToTeam1');
	nodecg.log.info('Minus Point to T1 Message sent!');
}

function addScoreTeam2() {
	nodecg.sendMessage('addPointToTeam2');
	nodecg.log.info('Add Point to T2 Message sent!');
}

function minusScoreTeam2() {
	nodecg.sendMessage('minusPointToTeam2');
	nodecg.log.info('Minus Point to T2 Message sent!');
}

const loitvIsHidden = nodecg.Replicant('loitvIsHidden');

function hideLOI() {
	nodecg.sendMessage('hideLOI');
	nodecg.log.info('hideLOI Message sent!');
}

function showLOI() {
	nodecg.sendMessage('showLOI');
	nodecg.log.info('showLOI Message sent!');
}
