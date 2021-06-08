function subBoxToggleGFX() {
	let subBoxEl = document.getElementById("substitutionDiv");
	if (subBoxEl.classList.contains("hide")) {
		subBoxEl.classList.remove("hide");
	} else {
		subBoxEl.classList.add("hide");
	}
}

nodecg.listenFor('subBoxToggleMessage', () => {
	nodecg.log.info('SubBox Toggle Message received!');
	subBoxToggleGFX()
});

// Data Receiving

nodecg.listenFor('subNameOffValue', (data) => {
	nodecg.log.info("Sub Name Off Value Received = "+data);
	document.getElementById('namePlayerOff').innerText = data;
});
nodecg.listenFor('subNumberOffValue', (data) => {
	nodecg.log.info("Sub Number Off Value Received = "+data);
	document.getElementById('numberPlayerOff').innerText = data;
});
nodecg.listenFor('subNameOnValue', (data) => {
	nodecg.log.info("Sub Name On Value Received = "+data);
	document.getElementById('namePlayerOn').innerText = data;
});
nodecg.listenFor('subNumberOnValue', (data) => {
	nodecg.log.info("Sub Number Off Value Received = "+data);
	document.getElementById('numberPlayerOn').innerText = data;
});
