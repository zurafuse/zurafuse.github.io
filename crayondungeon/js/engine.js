function update(){
	if (!(window.innerWidth < window.innerHeight))
	{
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		updateControls(keysDown);
		drawBackgrounds();
		drawBlocks();
		drawGems();
		if (superToilet.exist == true && room == 5){superToilet.update()}
		if (gemLock.exist == true && room == 6){gemLock.update()}
		if (weapon.exist == true && room == 13){weapon.update()}
		if (hammer.exist == true && room == 23){hammer.update()}
		if (plunger.exist == true && room == 14){plunger.update()}
		if (boat.exist == true && room == 3){boat.update()}
		if (key.exist == true && room == 3){key.update()}
		if (dir.lead != "down"){sword.update();};
		player.update();
		if (dir.lead == "down"){sword.update();}
		crayonUI.draw();
		requestAnimFrame(update);
	}
	else
	{
		canvasBad = true;
		canvas.width = window.innerWidth * 0.95;
		canvas.height = window.innerHeight * 0.95;
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "white";
		ctx.font = canvas.width * 0.12  + "px Verdana";
		ctx.fillText("PAUSED", canvas.width * .2, canvas.height * .1);
		ctx.font = canvas.width * 0.08  + "px Verdana";
		ctx.fillText("Please rotate Device", canvas.width * .05, canvas.height * .2);
		ctx.fillText("to continue playing.", canvas.width * .05, canvas.height * .3);
		ctx.drawImage(crayonImages.rotate, canvas.width * .1, canvas.height * .4, canvas.width * .85, canvas.height * .4);
		requestAnimFrame(update);
	}
}

requestAnimFrame(update);