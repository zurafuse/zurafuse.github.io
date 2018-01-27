function update(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	updateControls(keysDown);
	if (weapon.exist == true){weapon.update()}
	if (dir.lead != "down"){sword.update();};
	player.update();
	if (dir.lead == "down"){sword.update();}
	crayonUI.draw();
	requestAnimFrame(update);
}

requestAnimFrame(update);