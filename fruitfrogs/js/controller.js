var origState = "default";

// touch event handlers
// Set up touch events for mobile, etc
// touch event handlers
// Set up touch events for mobile, etc

	window.addEventListener("touchstart", function (e) {
		getTouchPos(canvas, e);
	}, false);
	
	window.addEventListener("touchend", function (e) {
	endTouchPos(canvas, e);
	}, false);


// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {	
		for (i in touchEvent.touches)
		{	
			var thisXPos = touchEvent.touches[i].clientX;
			var thisYPos = touchEvent.touches[i].clientY;
			touchMonster(bronsters, thisXPos, thisYPos);
		}
}
	
function endTouchPos(canvasDom, touchEvent) {
		for (i in touchEvent.changedTouches)
		{	
			var thisXPos = touchEvent.changedTouches[i].clientX;
			var thisYPos = touchEvent.changedTouches[i].clientY;
		}
}

window.addEventListener("click", function (e) {
	var clientX = e.pageX;
	var clientY = e.pageY;
	touchMonster(bronsters, clientX, clientY);
}, false);