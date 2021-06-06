function bounceIn() {
	var bounce = new Bounce();
	bounce.scale({
		from: { x: 0.5, y: 0.5 },
		to: { x: 1, y: 1 },
		duration: 10000
	});
	bounce.applyTo(document.querySelectorAll(".scoreBoxToggleAnim"));
};

function bounceOut() {
	var bounce = new Bounce();
	bounce.scale({
		from: { x: 1, y: 1 },
		to: { x: 0, y: 0 },
		duration: 10000
	});
	bounce.applyTo(document.querySelectorAll(".scoreBoxToggleAnim"));
};
