'use strict';

module.exports = function (nodecg) {
	const myRep = nodecg.Replicant('myRep', { defaultValue: 123 });

	myRep.on('change', (newValue, oldValue) => {
		console.log(`myRep changed from ${oldValue} to ${newValue}`);
	});

	myRep.value = 'Hello!';
};
