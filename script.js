function u(t) {
	for(c.width|=i=9,x.translate(960,540),x.rotate(S(t)*3);i--;x.fillRect((F=e=>--e*q*(D>1?D:1)-q/2)(i%3),F(i/3|0),q,q))D=t%2*6-i,q=400/(t%2-3)
	// your code here
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
	c = document.getElementById('c');
	x = c.getContext('2d');
	start();
}

function updateButtons() {
	document.getElementById('toggle').innerText = intervalId ? 'Pause' : 'Start';
	for (e of document.getElementsByClassName('frame')) {
		e.disabled = Boolean(intervalId);
	}
}

var c;
var x;
var S = Math.sin;
var C = Math.cos;
var T = Math.tan;

function R(r, g, b, a) {
	a = a === undefined ? 1 : a;
	return 'rgba(' + (r | 0) + ',' + (g | 0) + ',' + (b | 0) + ',' + a + ')';
}
