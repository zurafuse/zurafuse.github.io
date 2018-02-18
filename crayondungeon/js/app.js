var showers = [];
var toilets = [];
var chickens = [];
var blocks = [];
var backgrounds = [];

//var myMusic = new Audio("sound/music.mp3");
//myMusic.loop = true;
//myMusic.play();


var isCollision = function(x, y, width, height, x2, y2, width2, height2){
	if (x + width > x2 && x < x2 + width2 && y < y2 + height2 && y + height > y2)
	{
		return true;
	}
	return false;
};

var updateControls = function(e){
	if (e[37] == true)
	{
		dir.left = true;
		dir.lead = "left";
	}
	else
	{
		dir.left = false;
	}
	if (e[39] == true)
	{
		dir.right = true;
		dir.lead = "right";
	}
	else
	{
		dir.right = false;
	}
	if (e[40] == true)
	{
		dir.down = true;
		dir.lead = "down";
	}
	else
	{
		dir.down = false;
	}
	if (e[38] == true)
	{
		dir.up = true;
		dir.lead = "up";
	}
	else
	{
		dir.up = false;
	}
	if (e[32] == true)
	{
		dir.fire = true;
	}
	else
	{
		dir.fire = false;
	}
};

var drawBlocks = function(){
	for (i in blocks)
	{
		ctx.drawImage(blocks[i].img, blocks[i].sx, blocks[i].sy, blocks[i].swidth, blocks[i].sheight, blocks[i].x, blocks[i].y, blocks[i].width, blocks[i].height);
	}
};

var drawBackgrounds = function(){
	for (i in backgrounds)
	{
		ctx.drawImage(backgrounds[i].img, backgrounds[i].sx, backgrounds[i].sy, backgrounds[i].swidth, backgrounds[i].sheight, backgrounds[i].x.toFixed(0), backgrounds[i].y.toFixed(0), backgrounds[i].width, backgrounds[i].height);
	}
};

