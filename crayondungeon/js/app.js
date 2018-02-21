var showers = [];
var toilets = [];
var blocks = [];
var gems = [];
var hearts = [];
var backgrounds = [];

//var myMusic = new Audio("sound/music.mp3");
//myMusic.loop = true;
//myMusic.play();

function restart(){
	showers = [];
	toilets = [];
	blocks = [];
	gems = [];
	hearts = [];
	backgrounds = [];
	room = 3;
	weapon.exist = true;
	plunger.exist = true;
	boat.exist = true;
	hammer.exist = true;
	key.exist = true;
	superToilet.exist = true;
	gemLock.exist = true;
	player.health = 100;
	player.sword = false;
	player.plunger = false;
	player.boat = false;
	player.hammer = false;
	player.key = false;
	player.x = sprtHtControl * 14;
	player.y =  sprtHtControl * 7;
	populateItems();
	populate(room);
};


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

var drawGems = function(){
	for (i in gems)
	{
		if (gems[i].room == room)
			{
			gems[i].update();
			ctx.drawImage(gems[i].img, gems[i].sx, gems[i].sy, gems[i].swidth, gems[i].sheight, gems[i].x.toFixed(0), gems[i].y.toFixed(0), gems[i].width, gems[i].height);
			if (isCollision(gems[i].x, gems[i].y, gems[i].width, gems[i].height,
				player.x, player.y, player.width, player.height) == true)
			{
				gems.splice(i, 1);
			}
		}
	}
};

var drawHearts = function(){
	for (i in hearts)
	{
		if (hearts[i].room == room)
			{
			ctx.drawImage(hearts[i].img, hearts[i].sx, hearts[i].sy, hearts[i].swidth, hearts[i].sheight, hearts[i].x.toFixed(0), hearts[i].y.toFixed(0), hearts[i].width, hearts[i].height);
			if (isCollision(hearts[i].x, hearts[i].y, hearts[i].width, hearts[i].height,
				player.x, player.y, player.width, player.height) == true)
			{
				hearts.splice(i, 1);
				player.health = 100;
			}
		}
	}
};


function populateItems(){
	//gems
	gems.push(new gemClass(3, 4, 3), new gemClass(4, 4, 3));
	//hearts
	hearts.push(new heartClass(3, 7, 13), new heartClass(4, 7, 13));
}

populateItems();