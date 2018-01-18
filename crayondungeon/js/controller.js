//Input
window.addEventListener('keydown', function(e) {
		isMobile = false;
		keysDown[e.keyCode] = true;
		delete keysUp[e.keyCode];
});
window.addEventListener('keyup', function(e) {
		keysUp[e.keyCode] = true;
		delete keysDown[e.keyCode];
		if ((e.keyCode == 37 && dirLead == "left") || (e.keyCode == 38 && dirLead == "up") || 
			(e.keyCode == 39 && dirLead == "right") || (e.keyCode == 40 && dirLead == "front")){
			dirLead = "default";
		}
});

// touch event handlers
// Set up touch events for mobile, etc
window.addEventListener("touchstart", function (e) {
        mousePos = getTouchPos(canvas, e);
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousedown", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchend", function (e) {
  var mouseEvent = new MouseEvent("mouseup", {});
  canvas.dispatchEvent(mouseEvent);
  	delete keysDown[38];
  	delete keysDown[39];
  	delete keysDown[40];
  	delete keysDown[37];
  	delete keysDown[32];
}, false);

// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {
	isMobile = true;
	for (i in touchEvent.touches)
	{
		var thisXPos = touchEvent.touches[i].clientX;
		var thisYPos = touchEvent.touches[i].clientY;
  
			if (thisXPos < crayonUI.joyStick.left.x + (crayonUI.joyStick.left.width * 1.3) && thisXPos > crayonUI.joyStick.left.x * 0.7 &&
			thisYPos > crayonUI.joyStick.left.y - (crayonUI.joyStick.left.height * 0.7) && thisYPos < crayonUI.joyStick.left.y + (crayonUI.joyStick.left.height * 0.7))
			{
				delete keysUp[37];
				dirLead = "left";
				keysDown[37] = true;
			}
		  
			else if (thisXPos < crayonUI.joyStick.right.x + (crayonUI.joyStick.right.width * 1.3) && thisXPos > crayonUI.joyStick.right.x * 0.7 &&
			thisYPos > crayonUI.joyStick.right.y - (crayonUI.joyStick.right.height * 0.7) && thisYPos < crayonUI.joyStick.right.y + (crayonUI.joyStick.right.height * 0.7))
			{
				delete keysUp[39];
				dirLead = "right";
				keysDown[39] = true;
			}
		  
			else if (thisXPos < crayonUI.joyStick.up.x + (crayonUI.joyStick.up.width * 0.8) && thisXPos > crayonUI.joyStick.up.x - (crayonUI.joyStick.up.width * 0.8) &&
			thisYPos > crayonUI.joyStick.up.y * 0.8 && thisYPos < crayonUI.joyStick.up.y + (crayonUI.joyStick.up.height * 1.2))
			{
				delete keysUp[38];
				dirLead = "up";
				keysDown[38] = true;
			}
		  
			else if (thisXPos < crayonUI.joyStick.down.x + (crayonUI.joyStick.down.width * 1.5) && thisXPos > crayonUI.joyStick.down.x - (crayonUI.joyStick.down.width * .5) &&
			thisYPos > crayonUI.joyStick.down.y - (crayonUI.joyStick.down.height * .5) && thisYPos < crayonUI.joyStick.down.y + (crayonUI.joyStick.down.height * 1.5))
			{
				delete keysUp[40];
				dirLead = "front";
				keysDown[40] = true;
			}
		  
			else if (thisXPos < crayonUI.joyStick.shoot.x + (crayonUI.joyStick.shoot.width * 1.5) && thisXPos > crayonUI.joyStick.shoot.x - (crayonUI.joyStick.shoot.width * .5) &&
			thisYPos > crayonUI.joyStick.shoot.y - (crayonUI.joyStick.shoot.height * .5) && thisYPos < crayonUI.joyStick.shoot.y + (crayonUI.joyStick.shoot.height * 1.5))
			{
				delete keysUp[32]
				keysDown[32] = true;
			}
	} 
}

function endTouchPos(canvasDom, touchEvent) {
	for (i in touchEvent.changedTouches)
	{	
		var thisXPos = touchEvent.changedTouches[i].clientX;
		var thisYPos = touchEvent.changedTouches[i].clientY;
		if (thisXPos < crayonUI.joyStick.left.x + (crayonUI.joyStick.left.width * 1.3) && thisXPos > crayonUI.joyStick.left.x * 0.7 &&
		thisYPos > crayonUI.joyStick.left.y - (crayonUI.joyStick.left.height * 0.7) && thisYPos < crayonUI.joyStick.left.y + (crayonUI.joyStick.left.height * 0.7))
			{
				delete keysDown[37];
				keysUp[37] = true;
			}
		  
		else if (thisXPos < crayonUI.joyStick.right.x + (crayonUI.joyStick.right.width * 1.3) && thisXPos > crayonUI.joyStick.right.x * 0.7 &&
		thisYPos > crayonUI.joyStick.right.y - (crayonUI.joyStick.right.height * 0.7) && thisYPos < crayonUI.joyStick.right.y + (crayonUI.joyStick.right.height * 0.7))
			{
				delete keysDown[39];
				keysUp[39] = true;
			}
		  
		else if (thisXPos < crayonUI.joyStick.up.x + (crayonUI.joyStick.up.width * 0.8) && thisXPos > crayonUI.joyStick.up.x - (crayonUI.joyStick.up.width * 0.8) &&
		thisYPos > crayonUI.joyStick.up.y * 0.8 && thisYPos < crayonUI.joyStick.up.y + (crayonUI.joyStick.up.height * 1.2))
			{
				delete keysDown[38];
				keysUp[38] = true;
			}
		  
		else if (thisXPos < crayonUI.joyStick.down.x + (crayonUI.joyStick.down.width * 1.5) && thisXPos > crayonUI.joyStick.down.x - (crayonUI.joyStick.down.width * .5) &&
		thisYPos > crayonUI.joyStick.down.y - (crayonUI.joyStick.down.height * .5) && thisYPos < crayonUI.joyStick.down.y + (crayonUI.joyStick.down.height * 1.5))
			{
				delete keysDown[40];
				keysUp[40] = true;
			}
		  
		else if (thisXPos < crayonUI.joyStick.shoot.x + (crayonUI.joyStick.shoot.width * 1.5) && thisXPos > crayonUI.joyStick.shoot.x - (crayonUI.joyStick.shoot.width * .5) &&
		thisYPos > crayonUI.joyStick.shoot.y - (crayonUI.joyStick.shoot.height * .5) && thisYPos < crayonUI.joyStick.shoot.y + (crayonUI.joyStick.shoot.height * 1.5))
			{
				delete keysDown[32];
				keysUp[32] = true;
			}		
		
			
	}
}