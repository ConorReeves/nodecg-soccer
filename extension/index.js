'use strict';

module.exports = function (nodecg) {
	const team1Points = nodecg.Replicant('team1Points', { defaultValue: 0}, {persistent: false});
	const team2Points = nodecg.Replicant('team2Points', { defaultValue: 0}, {persistent: false});
	const team1Chars = nodecg.Replicant('team1Chars', { defaultValue: "SHA"}, {persistent: false});
	const team2Chars = nodecg.Replicant('team2Chars', { defaultValue: "PLA"}, {persistent: false});
	const timerMinutes = nodecg.Replicant('timerMinutes', { defaultValue: 0}, {persistent: false});
	const timerSeconds = nodecg.Replicant('timerSeconds', { defaultValue: 0}, {persistent: false});

	team1Points.on('change', (newValue, oldValue) => {
		console.log(`team1Points changed from ${oldValue} to ${newValue}`);
	});
	team1Points.value = 0;

	team2Points.on('change', (newValue, oldValue) => {
		console.log(`team2Points changed from ${oldValue} to ${newValue}`);
	});
	team2Points.value = 0;

	team1Chars.on('change', (newValue, oldValue) => {
		console.log(`team1Chars changed from ${oldValue} to ${newValue}`);
	});
	team1Chars.value = "SHA";

	team2Chars.on('change', (newValue, oldValue) => {
		console.log(`team2Chars changed from ${oldValue} to ${newValue}`);
	});
	team2Chars.value = "DRO";

	timerMinutes.value = 0;

	timerSeconds.value = 0;
};
