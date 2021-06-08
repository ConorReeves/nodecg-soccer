function hideLOI() {
	document.getElementById("loitv").style.display = "none";
}

function showLOI() {
	document.getElementById("loitv").style.display = "block";
}

nodecg.listenFor('hideLOI', () => {
	nodecg.log.info('Hide LOI Message received!');
	hideLOI();
});

nodecg.listenFor('showLOI', () => {
	nodecg.log.info('Show LOI Message received!');
	showLOI();
});
