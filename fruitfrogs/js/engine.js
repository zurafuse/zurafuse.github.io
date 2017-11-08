function update(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (i = 0; i < bronsters.length; i++)
	{
		bronsters[i].update();
		bronsters[i].draw();
		if (bronsters[i].state == "dead")
		{
			if (bronsters[i].diecounter > 20)
			{
				bronsters.splice(i, 1);
			}
		}
	}
	
	for (i = 0; i < frogs.length; i++)
	{
		frogs[i].update();
		frogs[i].draw();
	}
	requestAnimFrame(update);
}

update();