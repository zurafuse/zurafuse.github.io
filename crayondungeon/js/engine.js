function update(mod) {

	if (kaioIsVert() != true)
	{
		switch (kaiomega.gamestate)
		{
			case "play":
				PlayUpdate(mod);
				break;
			case "battle":
				BattleUpdate(mod);
				break;
			case "map":
				MapUpdate(mod);
				break;
			case "title":
				TitleUpdate(mod);
				break;
			case "menu":
				MenuUpdate(mod);
				break;
			case "event":
				EventUpdate(mod);
				break;
		}
	}	
}

function render() {
	if (kaioIsVert() != true)
	{
		if (kaiomega.windowBad == true)
		{
			kaiomega.windowBad = false;
			canvas.width = window.innerWidth * 0.95;
			canvas.height = window.innerHeight * 0.95;			
		}
		switch (kaiomega.gamestate)
		{
			case "play":
				PlayRender();
				break;
			case "battle":
				BattleRender();
				break;
			case "map":
				MapRender();
				break;
			case "title":
				TitleRender();
				break;
			case "menu":
				MenuRender();
				break;
			case "event":
				EventRender();
				break;
		}	
	}
	else
	{	
		kaiomega.windowBad = true;
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
		ctx.drawImage(kaioImages.UI.rotate, canvas.width * .1, canvas.height * .4, canvas.width * .85, canvas.height * .4);
	}
}

function run() {
    update((Date.now() - time) / 1000);
    render();
    time = Date.now();
	requestAnimFrame(run);
}

var time = Date.now();
requestAnimFrame(run);