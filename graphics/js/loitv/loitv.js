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

function hideSRFCTV() {
	document.getElementById("srfc").classList.add("hide");
}

function showSRFCTV() {
	document.getElementById("srfc").classList.remove("hide");
}

nodecg.listenFor('hideSRFC', () => {
	nodecg.log.info('Hide SRFC Message received!');
	hideSRFCTV();
});

nodecg.listenFor('showSRFC', () => {
	nodecg.log.info('Show SRFC Message received!');
	showSRFCTV();
});
