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
			console.log(thisXPos + ", " + thisYPos);
			for (i in bronsters)
			{
				if (thisXPos > bronsters[i].x && thisXPos < bronsters[i].x + bronsters[i].width &&
				thisYPos > bronsters[i].y && thisYPos < bronsters[i].y + bronsters[i].height)
				{
					if (bronsters[i].state != "dead")
					{
						bronsters[i].state = "dead";
					}
				}
			}
		}
}
	
function endTouchPos(canvasDom, touchEvent) {
		for (i in touchEvent.changedTouches)
		{	
			var thisXPos = touchEvent.changedTouches[i].clientX;
			var thisYPos = touchEvent.changedTouches[i].clientY;
			console.log(thisXPos + ", " + thisYPos);
		}
}

window.addEventListener("click", function (e) {
	var clientX = e.pageX;
	var clientY = e.pageY;

			for (i in bronsters)
			{
				if (clientX > bronsters[i].x && clientX < bronsters[i].x + bronsters[i].width &&
				clientY > bronsters[i].y && clientY < bronsters[i].y + bronsters[i].height)
				{
					if (bronsters[i].state != "dead")
					{
						bronsters[i].state = "dead";
					}
				}
			}	
	
}, false);