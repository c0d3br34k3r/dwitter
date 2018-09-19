function u(t) {
	x.clearRect(0, 0, c.width, c.height);

	
	
	var sz = 120;
	var q = 0
	for (var j = 0; j < c.height; j += sz) {
		for (var i = 0; i < c.width; i += sz) {
			var h = 255 * (.5 + .5 * sin(2 * Math.PI * ((t * 25 + q++) / (c.width * c.height / sz / sz))));
			x.fillStyle = color(0, h, 255 - h);
			x.fillRect(i, j, sz, sz);
		}
	}

	// var r = c.height / 2;
	// for (var i = 0; i < 2000 * PI; i++) {
		// x.fillRect(c.width  / 2 + r * cos((t + cos(i / 10) * 3)), 
				   // c.height / 2 + r * sin((t + sin(i / 10) * 3)), 
				// 20, 
				// 20);
	// }
}

var startFrame;
var lastFrame = 0;
var intervalId;

// change this to modify speed. 2.0 is twice as fast, etc.
var SPEED_MODIFIER = 1.0;
var SPEED = 1000 / SPEED_MODIFIER;
var FRAME_INTERVAL = 16;

function start() {
	startFrame = Date.now() - lastFrame;
	draw();
	intervalId = setInterval(draw, FRAME_INTERVAL);
	updateButtons();
}

function draw() {
	lastFrame = Date.now() - startFrame;
	u(lastFrame / SPEED);
}

function pause() {
	clearInterval(intervalId);
	intervalId = 0;
	updateButtons();
}

function toggle() {
	if (!intervalId) {
		start();
	} else {
		pause();
	}
}

function reset() {
	if (intervalId) {
		pause();
		lastFrame = 0;
		start();
	} else {
		lastFrame = 0;
		u(0);
	}
}

function nextFrame() {
	frame(FRAME_INTERVAL);
}

function prevFrame() {
	frame(-FRAME_INTERVAL);
}

function frame(increment) {
	if (!intervalId) {
		lastFrame += increment;
		u(lastFrame / SPEED);
	}
}

function setup() {
	c = document.getElementById('canvas');
	x = c.getContext('2d');
	start();
}

function updateButtons() {
	document.getElementById('toggle').innerText = intervalId ? 'Pause' : 'Start';
	for (e of document.getElementsByClassName('frame')) {
		e.disabled = Boolean(intervalId);
	}
}

function color(r, g, b, a) {
	a = a === undefined ? 1 : a;
	return 'rgba(' + (r | 0) + ',' + (g | 0) + ',' + (b | 0) + ',' + a + ')';
}

var c;
var x;
var S = Math.sin;
var C = Math.cos;
var T = Math.tan;
var R = color;

var sin = Math.sin;
var cos = Math.cos;
var tan = Math.tan;
