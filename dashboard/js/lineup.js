function sendHideAllLineup() {
	nodecg.sendMessage('hideAllLineupMessage');
	nodecg.log.info('Hide All Lineup Message sent!');
}

function sendShowAllLineup() {
	nodecg.sendMessage('showAllLineupMessage');
	nodecg.log.info('Show All Lineup Message sent!');
}
