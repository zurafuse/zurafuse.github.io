var room = 0;

function populate(room){
	if (room == 0)
	{
		//ROOM 1
		//rocks
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 4, 4, sprtHtControl, sprtHtControl, true));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 5, 4, sprtHtControl, sprtHtControl, true));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 6, 4, sprtHtControl, sprtHtControl, true));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 10, 4, sprtHtControl, sprtHtControl, true));
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 1, sprtHtControl, sprtHtControl, false));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 5, 1, sprtHtControl, sprtHtControl, false));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 6, 1, sprtHtControl, sprtHtControl, false));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 1, sprtHtControl, sprtHtControl, false));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 2, 8, sprtHtControl, sprtHtControl, false));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 9, sprtHtControl, sprtHtControl, false));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 12, sprtHtControl, sprtHtControl, false));
		//grass
		for (i = 0; i < gridWidth; i++)
		{
			for (j = 0; j < gridHeight; j++)
			{
				console.log(i * sprtHtControl);
				console.log(j * sprtHtControl);
				backgrounds.push(new blockClass(crayonImages.backgrounds, 0, 100, 100, 100, i, j, sprtHtControl, sprtHtControl));
			}
		}
		//road
		for (i = 0; i < 20; i++)
		{
				console.log(i * sprtHtControl);
				console.log(j * sprtHtControl);
				backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, i, 2, sprtHtControl, sprtHtControl));
		}
		for (i = 2; i < 20; i++)
		{
				console.log(i * sprtHtControl);
				console.log(j * sprtHtControl);
				backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 20, i, sprtHtControl, sprtHtControl));
		}				
	}
}

populate(room);