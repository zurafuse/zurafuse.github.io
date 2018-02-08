var room = 3;

function blockLine(dir, type)
{
	var sx = 0;
	var sy = 0;
	if (type == "tree")
	{
		sx = 100;		
	}
	else if (type == "stone1")
	{
		sx = 0; sy = 200;
	}
	else if (type == "stone2")
	{
		sx = 100; sy = 200;		
	}
	
	if (dir == "west")
	{
		for (i = 0; i < gridHeight; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, sx, sy, 100, 100, 0, i, sprtHtControl, sprtHtControl));			
		}
	}
	else if (dir == "east")
	{
		for (i = 0; i < gridHeight; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, sx, sy, 100, 100, gridWidth - 1, i, sprtHtControl, sprtHtControl));			
		}
	}
	else if (dir == "north")
	{
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, sx, sy, 100, 100, i, 0, sprtHtControl, sprtHtControl));			
		}
	}
	else if (dir == "south")
	{
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, sx, sy, 100, 100, i, gridHeight - 1, sprtHtControl, sprtHtControl));			
		}
	}
}

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
		blockLine("west", "tree");
		blockLine("south", "tree");
	}
	if (room == 1)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		blockLine("south", "tree");
	}
	if (room == 2)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		blockLine("south", "tree");
	}		
	if (room == 3)
	{
		//ROOM 3
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));
		//road
		for (i = 0; i < 14; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 14, i, sprtHtControl, sprtHtControl));
		}			
		//lock
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 7, 11, sprtHtControl, sprtHtControl, "lock"));

		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 5, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 6, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 2, 8, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 9, sprtHtControl, sprtHtControl));
		blockLine("south", "tree");
		blockLine("east", "stone1");
	}
	if (room == 4)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		blockLine("south", "tree");
		blockLine("west", "tree");
		blockLine("north", "stone1");
	}
	if (room == 5)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		blockLine("south", "tree");
	}
	if (room == 6)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		blockLine("south", "tree");
	}
	if (room == 7)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("south", "tree");
		blockLine("east", "tree");
	}
	if (room == 10)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("west", "tree");
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
		//rocks
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 4, 4, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 5, 4, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 6, 4, sprtHtControl, sprtHtControl, "rock"));
		//path
		for (i = 6; i < 15; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 14, i, sprtHtControl, sprtHtControl));
		}	
	}
	if (room == 14)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		blockLine("south", "tree");
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
		blockLine("east", "tree");
	}
	if (room == 20)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("west", "tree");
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 0, sprtHtControl, sprtHtControl, "water"));
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 1, sprtHtControl, sprtHtControl, "water"));
		}
	}
	if (room == 21)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 0, sprtHtControl, sprtHtControl, "water"));
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 1, sprtHtControl, sprtHtControl, "water"));
		}
	}
	if (room == 22)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 0, sprtHtControl, sprtHtControl, "water"));
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 1, sprtHtControl, sprtHtControl, "water"));
		}
	}	
	if (room == 23)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 0, sprtHtControl, sprtHtControl, "water"));
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 1, sprtHtControl, sprtHtControl, "water"));
		}
	}
	if (room == 24)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 0, sprtHtControl, sprtHtControl, "water"));
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, 1, sprtHtControl, sprtHtControl, "water"));
		}	
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
		blockLine("east", "tree");
	}
	if (room == 30)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("north", "tree");
		blockLine("west", "tree");
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, gridHeight - 1, sprtHtControl, sprtHtControl, "water"));
		}
	}
	if (room == 31)
	{
		//desert
		backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//stone
		blockLine("north", "stone2");
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, gridHeight - 1, sprtHtControl, sprtHtControl, "water"));
		}
	}
	if (room == 32)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("north", "tree");
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, gridHeight - 1, sprtHtControl, sprtHtControl, "water"));
		}
	}
	if (room == 33)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("north", "tree");
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, gridHeight - 1, sprtHtControl, sprtHtControl, "water"));
		}
	}
	if (room == 34)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("north", "tree");
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, gridHeight - 1, sprtHtControl, sprtHtControl, "water"));
		}
		for (i = 0; i < gridHeight; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, gridWidth - 1, i, sprtHtControl, sprtHtControl, "water"));
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, gridWidth - 2, i, sprtHtControl, sprtHtControl, "water"));
		}
	}
	if (room == 35)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("north", "tree");
		//water
		for (i = 0; i < gridHeight; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 0, i, sprtHtControl, sprtHtControl, "water"));
		}	
	}
	if (room == 36)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("north", "tree");
	}
		if (room == 37)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blockLine("north", "tree");
		blockLine("east", "tree");
	}
}

populate(room);