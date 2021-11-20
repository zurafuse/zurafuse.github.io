var Events = {
	die: false,
	win: false,
	boatevent: false,
	planeevent: false,
	rocketevent: false,
	rotateScreen: () => {
		canvas.width = window.innerWidth * 0.95;
		canvas.height = window.innerHeight * 0.95;
		context.fillStyle = "black";
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "white";
		context.font = canvas.width * 0.12  + "px Verdana";
		context.fillText("PAUSED", canvas.width * .2, canvas.height * .1);
		context.font = canvas.width * 0.08  + "px Verdana";
		context.fillText("Please rotate Device", canvas.width * .05, canvas.height * .2);
		context.fillText("to continue playing.", canvas.width * .05, canvas.height * .3);
		context.drawImage(pictures.rotate, canvas.width * .1, canvas.height * .4, canvas.width * .85, canvas.height * .4);

	},
	gameover: () => {
		//display Game Over text
		context.font = "bold " + gridWidth + "pt sans-serif";
		context.strokeStyle = "black";
		context.fillStyle = "white";
		context.fillText("GAME OVER!", canvas.width * 0.35, canvas.height * 0.3);			
	},
	winner: () => {
		//display Winner text
		context.font = "bold " + gridWidth + "pt sans-serif";
		context.strokeStyle = "black";
		context.fillStyle = "white";
		context.fillText("CONGRATULATIONS! YOU WON!!", canvas.width * 0.15, canvas.height * 0.3);		
	},
	boat: () => {
		if (Objects.boat.img == pictures.objects.boatright)
		{
			Objects.boat.x += player.speed;
			if (Level == 10)
			{
				if (Objects.boat.x > canvas.width)
				{
					newLevel("right");
					Objects.boat.x = 0 - Objects.boat.width;
				}
			}
			else
			{
				if (Objects.boat.x > canvas.width * 0.42)
				{
					Events.boatevent = false;
					player.x = canvas.width * 0.55;
					player.locked = false;
					Objects.boat.locked = true;
				}			
			}
		}
		else
		{
			Objects.boat.x -= player.speed;
			if (Level == 11)
			{
				if (Objects.boat.x + Objects.boat.width < 0)
				{
					newLevel("left");
					Objects.boat.x = canvas.width;
				}
			}
			else
			{
				if (Objects.boat.x < canvas.width * 0.42)
				{
					Events.boatevent = false;
					player.x = canvas.width * 0.45;
					player.locked = false;
					Objects.boat.locked = true;
				}			
			}
		}
		
		
	},
	plane: () => {
		if (Objects.plane.img == pictures.objects.plane)
		{
			Objects.plane.x += player.speed;
			if (Level == 20)
			{
				if (Objects.plane.x > canvas.width)
				{
					newLevel("right");
					Objects.plane.x = 0 - Objects.plane.width;
				}
			}
			else
			{
				if (Objects.plane.x > canvas.width * 0.48)
				{
					Events.planeevent = false;
					player.x = canvas.width * 0.55;
					player.locked = false;
					Objects.plane.locked = true;
				}			
			}
		}
		else
		{
			Objects.plane.x -= player.speed;
			if (Level == 21)
			{
				if (Objects.plane.x + Objects.plane.width < 0)
				{
					newLevel("left");
					Objects.plane.x = canvas.width;
				}
			}
			else
			{
				if (Objects.plane.x < canvas.width * 0.4)
				{
					Events.planeevent = false;
					player.x = canvas.width * 0.45;
					player.locked = false;
					Objects.plane.locked = true;
				}			
			}
		}
				
	},
	rocket: () => {
		
		Objects.rocket.y-=player.speed;
		if (Objects.rocket.y + Objects.rocket.height < 0)
		{
			Events.rocketevent = false;
			player.locked = false;
			if (Level == 26)
			{
				newLevel("left");
			}
			else
			{
				newLevel("right");
			}
		}			
		
	}
};