var room = 3;

function blockLine(dir, type)
{
	var sx = 0;
	var sy = 0;
	if (type == "tree")
	{
		sx = 100;		
	}
	if (type == "tree2")
	{
		sy = 200;
		sx = 200;		
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
	bullets = [];
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
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 7, 10, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 7, 11, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 7, 12, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 7, 13, sprtHtControl, sprtHtControl, "lock"));
		//rocks
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 19, 10, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 20, 9, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 21, 9, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 22, 9, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 23, 10, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 23, 11, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 23, 12, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 23, 13, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 18, 11, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 18, 12, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 18, 13, sprtHtControl, sprtHtControl, "rock"));
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 5, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 6, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 1, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 1, 7, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 2, 8, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 7, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 6, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 5, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 4, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 3, 9, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 9, 5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 10, 5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 17, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 16, 4, sprtHtControl, sprtHtControl));
		blockLine("south", "tree");
		//stone walls
		blockLine("east", "stone1");
		blockLine("west", "stone1");
	}
	if (room == 4)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		blockLine("south", "tree");
		blockLine("west", "tree");
		blockLine("north", "stone1");
		octaforce.message = true;
		setTimeout(function(){octaforce.message = false;}, 4500);
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
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 23, 13, sprtHtControl, sprtHtControl));
				
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 27, 10, sprtHtControl, sprtHtControl));
				
		//rocks
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 23, 12, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 23, 11, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 23, 10, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 24, 10, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 25, 10, sprtHtControl, sprtHtControl, "rock"));	
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 26, 10, sprtHtControl, sprtHtControl, "rock"));		
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
		//water
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 11, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 12, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 13, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 5, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 6, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 7, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 11, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 12, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 13, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 7, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 6, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 5, sprtHtControl, sprtHtControl, "water"));
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
		//stone wall
		blockLine("west", "stone1");
		//rocks
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 4, 4, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 5, 4, sprtHtControl, sprtHtControl, "rock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 6, 4, sprtHtControl, sprtHtControl, "rock"));
		//path
		for (i = 6; i < 15; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 14, i, sprtHtControl, sprtHtControl));
		}
		showers.push(new showerClass(4, 5));
		toilets.push(new toiletClass(8, 2, "left"));
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
		//water
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 11, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 12, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 13, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 4, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 5, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 6, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 7, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 10, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 11, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 12, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 13, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 8, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 7, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 6, sprtHtControl, sprtHtControl, "water"));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, 14, 5, sprtHtControl, sprtHtControl, "water"));
		//trees
		blockLine("east", "tree");
	}
	if (room == 20)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//road
		for (i = 2; i < 15; i++)
		{
			backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, gridWidth - 1, i, sprtHtControl, sprtHtControl));
		}
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
		//desert
		backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 8, 5, 12 * sprtHtControl, 7 * sprtHtControl));		
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
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 2, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 3, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 4, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 5, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 10, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 11, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 12, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 13, sprtHtControl, sprtHtControl));
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 14, sprtHtControl, sprtHtControl));
		for (i = 1; i < gridWidth; i++)
		{
			if (i < 13 || i > 16)
			{
				blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, i, 14, sprtHtControl, sprtHtControl));
			}
		}
		//locks
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 0, 7, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 0, 8, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 0, 6, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 0, 9, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 14, 14, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 15, 14, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 13, 14, sprtHtControl, sprtHtControl, "lock"));
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 100, 100, 100, 16, 14, sprtHtControl, sprtHtControl, "lock"));
		
	}	
	if (room == 23)
	{
		//grass
		backgrounds.push(new blockClass(crayonImages.grass, 0, 0, 400, 300, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 100, 0, 100, 100, 0, 14, sprtHtControl, sprtHtControl));		
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
		//desert
		backgrounds.push(new blockClass(crayonImages.backgrounds, 200, 0, 100, 100, 0, 0, gridWidth * sprtHtControl, gridHeight * sprtHtControl));		
		//rocks
		blockLine("north", "stone2");
		blockLine("west", "stone2");
		//water
		for (i = 0; i < gridWidth; i++)
		{
			blocks.push(new blockClass(crayonImages.backgrounds, 100, 100, 100, 100, i, gridHeight - 1, sprtHtControl, sprtHtControl, "water"));
		}
		//trees
		blocks.push(new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 1, 5, sprtHtControl, sprtHtControl), new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 2, 5, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 3, 5, sprtHtControl, sprtHtControl), new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 4, 5, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 5, 5, sprtHtControl, sprtHtControl), new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 5, 4, sprtHtControl, sprtHtControl),
		new blockClass(crayonImages.backgrounds, 200, 200, 100, 100, 5, 1, sprtHtControl, sprtHtControl));
			
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