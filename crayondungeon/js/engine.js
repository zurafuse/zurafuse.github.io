function update(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	player.update();
	crayonUI.draw();
	requestAnimFrame(update);
}

requestAnimFrame(update);