var room = 3;

function populate(room){
	showers = [];
	toilets = [];
	chickens = [];
	blocks = [];
	backgrounds = [];
	if (room == 0)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 14, sprtHtControl, sprtHtControl));			
		}
		for (i = 0; i < gridHeight; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, i, sprtHtControl, sprtHtControl));			
		}
	}
	if (room == 1)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 14, sprtHtControl, sprtHtControl));			
		}
	}
	if (room == 2)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 14, sprtHtControl, sprtHtControl));			
		}
	}		
	if (room == 3)
	{
		//ROOM 3
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));
		//road
		for (i = 0; i < 20; i++)
		{
				backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, i, 2, sprtHtControl, sprtHtControl));
		}
		for (i = 2; i < 14; i++)
		{
				backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 20, i, sprtHtControl, sprtHtControl));
		}			
		//rocks
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 4, 4, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 5, 4, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 6, 4, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 10, 4, sprtHtControl, sprtHtControl, "rock"));
		//lock
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 7, 11, sprtHtControl, sprtHtControl, "lock"));
		//water
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 23, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 23, 5, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 23, 6, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 23, 7, sprtHtControl, sprtHtControl, "water"));
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 5, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 6, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 2, 8, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 9, sprtHtControl, sprtHtControl));
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 14, sprtHtControl, sprtHtControl));			
		}
	}
	if (room == 4)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 14, sprtHtControl, sprtHtControl));			
		}
	}
	if (room == 5)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 14, sprtHtControl, sprtHtControl));			
		}
	}
	if (room == 6)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 14, sprtHtControl, sprtHtControl));			
		}
	}
	if (room == 7)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 14, sprtHtControl, sprtHtControl));			
		}
		for (i = 0; i < gridHeight; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, gridWidth - 1, i, sprtHtControl, sprtHtControl));			
		}
	}
	if (room == 10)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		for (i = 0; i < gridHeight; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, i, sprtHtControl, sprtHtControl));			
		}
	}
	if (room == 11)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
	}
	if (room == 12)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
	}
	if (room == 13)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
	}
	if (room == 14)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
	}
	if (room == 15)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
	}
	if (room == 16)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
	}
	if (room == 17)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		for (i = 0; i < gridHeight; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, gridWidth - 1, i, sprtHtControl, sprtHtControl));			
		}
	}
	if (room == 20)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		for (i = 0; i < gridHeight; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, i, sprtHtControl, sprtHtControl));			
		}
	}
	if (room == 21)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
	}
	if (room == 22)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
	}	
	if (room == 23)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
	}
	if (room == 24)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
	}
	if (room == 25)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
	}
	if (room == 26)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
	}		
	if (room == 27)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		for (i = 0; i < gridHeight; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, gridWidth - 1, i, sprtHtControl, sprtHtControl));			
		}
	}
	if (room == 30)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		for (i = 0; i < gridHeight; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, i, sprtHtControl, sprtHtControl));			
		}
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 0, sprtHtControl, sprtHtControl));			
		}
	}
	if (room == 31)
	{
		//desert
		backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 0, sprtHtControl, sprtHtControl));			
		}
	}
	if (room == 32)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 0, sprtHtControl, sprtHtControl));			
		}
	}
	if (room == 33)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 0, sprtHtControl, sprtHtControl));			
		}
	}
	if (room == 34)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 0, sprtHtControl, sprtHtControl));			
		}
	}
	if (room == 35)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 0, sprtHtControl, sprtHtControl));			
		}
	}
	if (room == 36)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 0, sprtHtControl, sprtHtControl));			
		}
	}
		if (room == 37)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		for (i = 0; i < gridHeight; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, gridWidth - 1, i, sprtHtControl, sprtHtControl));			
		}
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 0, sprtHtControl, sprtHtControl));			
		}
	}
}

populate(room);