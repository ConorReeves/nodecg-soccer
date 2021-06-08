function hideLOI() {
	document.getElementById("loitv").classList.add("hide");
}

function showLOI() {
	document.getElementById("loitv").classList.remove("hide");
}

nodecg.listenFor('hideLOI', () => {
	nodecg.log.info('Hide LOI Message received!');
	hideLOI();
});

nodecg.listenFor('showLOI', () => {
	nodecg.log.info('Show LOI Message received!');
	showLOI();
});
