var room = 0;

function populate(room){
	if (room == 0)
	{
		blocks.push(new blockClass(crayonImages.backgrounds, 0, 0, 100, 100, 4, 4, sprtHtControl, sprtHtControl));
	}
}

populate(room);