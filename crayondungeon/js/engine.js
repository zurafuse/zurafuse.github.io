function update(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	console.log(player.attack);
	updateControls(keysDown);
	player.update();
	crayonUI.draw();
	requestAnimFrame(update);
}

requestAnimFrame(update);