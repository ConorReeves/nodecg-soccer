function toggleSub() {
	nodecg.sendMessage('subBoxToggleMessage');
	nodecg.log.info('Sub Box Message sent!');
}

let toggleSubPath = document.querySelector("#toggleSubstitutionCheckbox")

function subBoxToggle() {
	if (toggleSubPath.checked) {
		toggleSub();
	} else {
		toggleSub();
	}

}

// Changing Text

const playerOffNamePath = document.querySelector("#playerOffName");
function submitPlayerOffName() {
	let realPlayerOffNameVal = playerOffNamePath.value;
	nodecg.sendMessage('subNameOffValue', realPlayerOffNameVal);
	nodecg.log.info("playerOffNameValue Text Sent = "+realPlayerOffNameVal);
}

const playerOffNumberPath = document.querySelector("#playerOffNumber");
function submitPlayerOffNumber() {
	let realPlayerOffNumberVal = playerOffNumberPath.value;
	nodecg.sendMessage('subNumberOffValue', realPlayerOffNumberVal);
	nodecg.log.info("playerOffNumberValue Text Sent = "+realPlayerOffNumberVal);
}

const playerOnNamePath = document.querySelector("#playerOnName");
function submitPlayerOnName() {
	let realPlayerOnNameVal = playerOnNamePath.value;
	nodecg.sendMessage('subNameOnValue', realPlayerOnNameVal);
	nodecg.log.info("playerOnNameValue Text Sent = "+realPlayerOnNameVal);
}

const playerOnNumberPath = document.querySelector("#playerOnNumber");
function submitPlayerOnNumber() {
	let realPlayerOnNumberVal = playerOnNumberPath.value;
	nodecg.sendMessage('subNumberOnValue', realPlayerOnNumberVal);
	nodecg.log.info("playerOnNumberValue Text Sent = "+realPlayerOnNumberVal);
}

function submitAllSub() {
	submitPlayerOffNumber()
	submitPlayerOffName()
	submitPlayerOnName()
	submitPlayerOnNumber()
}
