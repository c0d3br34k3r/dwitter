function u(t) {
	l=c.width+=i=0;h=400;for(;++i<200;)for(j=a=(t+C(i))%2;j++<50;)x.fillRect(l*C(i*i)+~~a*(w=a*h-h)*C(j),(~~a?h:a*h)*(C(i)*C(i)+2)+w*S(j)/4,3,3)
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
	intervalId = setInterval(function() {
		lastFrame = Date.now() - startFrame;
		u(lastFrame / SPEED);
	}, FRAME_INTERVAL);
	updateButtons();
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
