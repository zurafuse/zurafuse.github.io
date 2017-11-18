function update(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#cfffca";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
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
	
	for (i = 0; i < fruit.length; i++)
	{
		fruit[i].update();
		fruit[i].draw();
		if (fruit[i].state == "delete")
		{
			fruit.splice(i, 1);
		}
	}
	
	for (i = 0; i < scores.length; i++)
	{
		scores[i].update();
		if (scores[i].alive == false)
		{
			scores.splice(i, 1);
		}
	}
	
	ctx.font="45pt Arial";
	ctx.strokeStyle = "#000";
	ctx.lineWidth = 3;
	ctx.strokeText("Score: " + fruitFrogs.score, canvas.width * .65, canvas.height * .085);
	ctx.font = "45pt Arial";
	ctx.fillStyle = "white";
	ctx.fillText("Score: " + fruitFrogs.score, canvas.width * .65, canvas.height * .085);
	
	requestAnimFrame(update);
}

update();