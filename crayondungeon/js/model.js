//define requestAnimFrame in case browser is old
var requestAnimFrame =  window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function(callback) {
                        window.setTimeout(callback, 1000 / 1);
                    };
					
//define canvas
/*var newElement = document.createElement("canvas");
newElement.id = "canvas";
document.getElementsByClassName("wrapper")[0].append(newElement);*/
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 180;

var keysUp = [];
var keysDown = [];
var dir = {
	right: false,
	left: false,
	up: false,
	down: false,
	fire: false,
	lead: "down"
}
//determine if the screen is on a mobile devices
var crayon = {
	isMobile: true,
	canvasBad: false
};

var gridWidth = 29;
var gridHeight = 15;
var sprtHtControl = canvas.width / gridWidth;

canvas.height = sprtHtControl * gridHeight;

if (window.innerWidth < window.innerHeight)
{
	canvas.height = canvas.height * 2;
}

var crayonImages = {
	player: new Image(),
	shoot: new Image(),
	sword: new Image(),
	hammer: new Image(),
	key: new Image(),
	boat: new Image(),
	plunger: new Image(),
	rotate: new Image(),
	backgrounds: new Image(),
	grass: new Image(),
	supertoilet: new Image(),
	run: function(){
		this.player.src = "images/player.png";
		this.shoot.src = "images/shoot.png";
		this.sword.src = "images/sword.png";
		this.hammer.src = "images/hammer.png";
		this.key.src = "images/key.png";
		this.boat.src = "images/boat.png";
		this.plunger.src = "images/plunger.png";
		this.rotate.src = "images/rotate.png";
		this.backgrounds.src = "images/object_tile.png";
		this.grass.src = "images/grass.png";
		this.supertoilet.src = "images/supertoilet.png";
	}
};
crayonImages.run();

var blockClass = function(img, sx, sy, swidth, sheight, x, y, width, height, type){
	this.img = img;
	this.sx = sx;
	this.sy = sy;
	this.swidth = swidth;
	this.sheight = sheight;
	this.x = x * sprtHtControl;
	this.y = y * sprtHtControl;
	this.width = width;
	this.height = height;
	this.type = type;
};

var superToilet = {
	x: sprtHtControl * 3,
	y:  sprtHtControl * 3,
	width:  sprtHtControl * 2.5,
	height:  sprtHtControl * 2.5,
	sx:  0,
	sy:  0,
	swidth:  150,
	sheight:  150,
	exist: true,
	img: crayonImages.supertoilet,
	update: function(){
		if (isCollision(this.x, this.y, this.width, this.height,
			player.x, player.y, player.width, player.height) == true)
		{
			if (player.plunger == true)
			{
				this.exist = false;
			}
			else
			{
				//decrease health etc
			}
		}
		//draw onto the canvas.
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	}		
}

var weapon = {
	x: sprtHtControl * 9,
	y:  sprtHtControl * 5,
	width:  sprtHtControl * 1.4,
	height:  sprtHtControl * 1.4,
	sx:  0,
	sy:  0,
	swidth:  50,
	sheight:  50,
	exist: true,
	img: crayonImages.sword,
	update: function(){
		if (isCollision(this.x, this.y, this.width, this.height,
			player.x, player.y, player.width, player.height) == true)
		{
			player.sword = true;
			this.exist = false;
		}
		//draw onto the canvas.
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	}		
}

var hammer = {
	x: sprtHtControl * 12,
	y:  sprtHtControl * 8,
	width:  sprtHtControl,
	height:  sprtHtControl,
	sx:  0,
	sy:  0,
	swidth:  45,
	sheight:  60,
	exist: true,
	img: crayonImages.hammer,
	update: function(){
		if (isCollision(this.x, this.y, this.width, this.height,
			player.x, player.y, player.width, player.height) == true)
		{
			player.hammer = true;
			this.exist = false;
		}
		//draw onto the canvas.
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	}		
};

var key = {
	x: sprtHtControl * 12,
	y:  sprtHtControl * 7,
	width:  sprtHtControl,
	height:  sprtHtControl * .6,
	sx:  0,
	sy:  0,
	swidth:  87,
	sheight:  38,
	exist: true,
	img: crayonImages.key,
	update: function(){
		if (isCollision(this.x, this.y, this.width, this.height,
			player.x, player.y, player.width, player.height) == true)
		{
			player.key = true;
			this.exist = false;
		}
		//draw onto the canvas.
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	}		
};

var plunger = {
	x: sprtHtControl * 12,
	y:  sprtHtControl * 8,
	width:  sprtHtControl,
	height:  sprtHtControl,
	sx:  0,
	sy:  0,
	swidth:  45,
	sheight:  60,
	exist: true,
	img: crayonImages.plunger,
	update: function(){
		if (isCollision(this.x, this.y, this.width, this.height,
			player.x, player.y, player.width, player.height) == true)
		{
			player.plunger = true;
			this.exist = false;
		}
		//draw onto the canvas.
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	}		
};

var boat = {
	x: sprtHtControl * 3,
	y:  sprtHtControl * 3,
	width:  sprtHtControl * 2,
	height:  sprtHtControl * 1.5,
	sx:  0,
	sy:  0,
	swidth:  87,
	sheight:  60,
	exist: true,
	img: crayonImages.boat,
	update: function(){
		if (isCollision(this.x, this.y, this.width, this.height,
			player.x, player.y, player.width, player.height) == true)
		{
			player.boat = true;
			this.exist = false;
		}
		//draw onto the canvas.
		ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
	}		
};

var sword = {
	x: 0,
	y: 0,
	width:  sprtHtControl,
	height:  sprtHtControl,
	sx:  0,
	sy:  0,
	swidth:  50,
	sheight:  50,
	img: crayonImages.sword,
	angle: 2.2,
	counter: 0,
	range: sprtHtControl * .75,
	update: function(){
		//the positioning of the sword is dependent on the player's direction.
		if (dir.lead == "down")
		{
			this.angle = 2.2;
			this.x = player.x - sprtHtControl * .15;
			this.y = player.y + sprtHtControl * .89;
			if (player.attack == true)
			{
				this.y = player.y + sprtHtControl * .39; 
				this.angle = 1.9;
				this.counter++;
				this.x += sprtHtControl * (this.counter * .02);
				this.y += sprtHtControl * .15;
				if (this.counter > 4)
				{
					this.y = player.y + sprtHtControl * .89;
					this.counter = 0;
				}
				else
				{
					this.extend += sprtHtControl * .1;	
				}
			}
		}
		else if (dir.lead == "up")
		{
			this.angle = -1;
			this.x = player.x + sprtHtControl * 1.2;
			this.y = player.y + sprtHtControl * .75;
			if (player.attack == true)
			{
				this.counter++;
				this.x -= sprtHtControl * (this.counter * .02);
				this.y -= sprtHtControl * (this.counter * .13);
				if (this.counter > 4)
				{
					this.counter = 0;
				}
			}
		}
		else if (dir.lead == "right")
		{
			this.angle = 3.8;
			this.x = player.x + sprtHtControl * .88;
			this.y = player.y + sprtHtControl * 1;
			if (player.attack == true)
			{
				this.angle = 3.175;
				this.counter++;
				this.x -= sprtHtControl * .3;
				this.x += sprtHtControl * (this.counter * .1);
				if (this.counter > 4)
				{
					this.counter = 0;
				}
			}
		}
		else if (dir.lead == "left")
		{
			this.angle = -.75;
			this.x = player.x + sprtHtControl * .38;
			this.y = player.y + sprtHtControl * .70;
			if (player.attack == true)
			{
				this.angle = 0;
				this.counter++;
				this.x -= sprtHtControl * (this.counter * .05);
				this.y = this.y +- sprtHtControl * .2;
				if (this.counter > 4)
				{
					this.counter = 0;
				}
			}
		}
		
		//draw the sword onto the canvas.
		if (player.sword == true)
		{
			ctx.translate(this.x, this.y);
			ctx.rotate(-this.angle + Math.PI/2.0);
			ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, 0, 0, this.width, this.height);
			ctx.rotate(this.angle - Math.PI/2.0);
			ctx.translate(-this.x, -this.y);
		}
	}
};

var Player = function(){
	this.x = 30;
	this.y =  30;
	this.width =  sprtHtControl;
	this.height =  sprtHtControl;
	this.sx =  0;
	this.sy =  0;
	this.swidth =  50;
	this.sheight =  50;
	this.speed =  sprtHtControl * 0.15;
	this.sword = false;
	this.hammer = false;
	this.plunger = false;
	this.key = false;
	this.attack =  false;
	this.counter =  0;
};

Player.prototype.update = function(){
		//if player goes off screen, go to another room
		//go up one room
		if (this.y < 0 - (sprtHtControl * .5))
		{
			this.y = sprtHtControl * (gridHeight - .5);
			room = room + 10;
			populate(room);
		}
		//go down one room
		if (this.y > sprtHtControl * gridHeight)
		{
			this.y = 0 - (gridHeight * .3);
			room = room - 10;
			populate(room);
		}
		//go left one room
		if (this.x < 0 - (sprtHtControl * .5))
		{
			this.x = gridWidth * (sprtHtControl - .5);
			room = room - 1;
			populate(room);
		}
		//go right one room
		if (this.x > sprtHtControl * gridWidth)
		{
			this.x = 0 - (gridHeight * .3);
			room = room + 1;
			populate(room);
		}
		if (this.attack == true){
			this.sx += 50;
			if (this.sx >= 200){
				this.sx = 0;
				//once attack is complete, return character to original place on sprite map.
				if (dir.lead == "down")
					{this.sy = 0;}
				else if (dir.lead == "up")
					{this.sy = 50;}
				else if (dir.lead == "right")
					{this.sy = 100;}
				else if (dir.lead == "left")
					{this.sy = 150;}
				this.attack = false;
			}
		}
		//use counter to handle animations that should be slower than 60 fps
		this.counter++;
		if (this.counter > 3)
		{
			this.counter = 0;
		}
		//determine movement based on key pressed
		var rightCollision = false;
		var leftCollision = false;
		var upCollision = false;
		var downCollision = false;
		//right
		if(dir.right == true)
		{
			this.sy = 100;
			for (i in blocks)
			{
				if (isCollision(this.x + this.speed, this.y, this.width, this.height, blocks[i].x, blocks[i].y,
					blocks[i].width, blocks[i].height) == true)
				{
					rightCollision = true;
					if (blocks[i].type == "rock" && player.hammer == true)
					{
						blocks.splice(i,1);
					}
					else if (blocks[i].type == "lock" && player.key == true)
					{
						blocks.splice(i,1);
					}
					else if (blocks[i].type == "water" && player.boat == true)
					{
						rightCollision = false;
					}
				}
			}
			if (rightCollision == false)
			{
				this.x+= this.speed;
			}
		}
		//left
		if(dir.left == true)
		{
			this.sy = 150;
			for (i in blocks)
			{
				if (isCollision(this.x - this.speed, this.y, this.width, this.height, blocks[i].x, blocks[i].y,
					blocks[i].width, blocks[i].height) == true)
				{
					leftCollision = true;
					if (blocks[i].type == "rock" && player.hammer == true)
					{
						blocks.splice(i,1);
					}
					else if (blocks[i].type == "lock" && player.key == true)
					{
						blocks.splice(i,1);
					}
					else if (blocks[i].type == "water" && player.boat == true)
					{
						leftCollision = false;
					}
				}
			}
			if (leftCollision == false)
			{
				this.x-= this.speed;
			}
		}
		//up
		if(dir.up == true)
		{
			this.sy = 50;
			for (i in blocks)
			{
				if (isCollision(this.x, this.y, this.width, this.height, blocks[i].x, blocks[i].y,
					blocks[i].width, blocks[i].height + this.speed) == true)
				{
					upCollision = true;
					if (blocks[i].type == "rock" && player.hammer == true)
					{
						blocks.splice(i,1);
					}
					else if (blocks[i].type == "lock" && player.key == true)
					{
						blocks.splice(i,1);
					}
					else if (blocks[i].type == "water" && player.boat == true)
					{
						upCollision = false;
					}
				}
			}
			if (upCollision == false)
			{
				this.y-= this.speed;
			}
		}
		//down
		if(dir.down == true)
		{
			this.sy = 0;
			for (i in blocks)
			{
				if (isCollision(this.x, this.y + this.speed, this.width, this.height, blocks[i].x, blocks[i].y,
					blocks[i].width, blocks[i].height) == true)
				{
					downCollision = true;
					if (blocks[i].type == "rock" && player.hammer == true)
					{
						blocks.splice(i,1);
					}
					else if (blocks[i].type == "lock" && player.key == true)
					{
						blocks.splice(i,1);
					}
					else if (blocks[i].type == "water" && player.boat == true)
					{
						downCollision = false;
					}
				}
			}
			if (downCollision == false)
			{
				this.y+= this.speed;
			}
		}	
		if(dir.fire == true)
		{
			if (this.attack == false)
			{
				this.attack = true;
				this.sx = 0;
			}
		}
		if (this.attack == true)
		{
			if (dir.lead == "left")
			{
				this.sy = 300;
			}
			if (dir.lead == "right")
			{
				this.sy = 250;				
			}
			if (dir.lead == "up")
			{
				this.sy = 350;
			}
			if (dir.lead == "down")
			{
				this.sy = 200;
			}			
		}
		if (this.sx > 151)
		{
			this.sx = 0;
		}	
		//draw onto the canvas.
		ctx.drawImage(crayonImages.player, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
		//if the player is moving, animate him.
		if ((dir.up == true || dir.down == true || dir.right == true || dir.left == true) && this.counter == 3){
			this.sx += 50;
		}
};

player = new Player();

//Create the UI object.
var crayonUI = {
	x: 0,
	y: 0,
	joyStick: 
	{
		left: {},
		right: {},
		up: {},
		down: {},
		shoot: {}
	},
	draw: function()
	{
		ctx.globalAlpha = 0.6;
		if (crayon.isMobile == true)
		{
			ctx.fillStyle = "cyan";
			//draw joy stick for mobile devices
			//left
			ctx.beginPath();
			ctx.moveTo(this.joyStick.left.x, this.joyStick.left.y);
			ctx.lineTo(this.joyStick.left.x + this.joyStick.left.width, this.joyStick.left.y - (this.joyStick.left.height * 0.5));
			ctx.lineTo(this.joyStick.left.x + this.joyStick.left.width, this.joyStick.left.y + (this.joyStick.left.height * 0.5));
			ctx.fill();
			//right
			ctx.beginPath();
			ctx.moveTo(this.joyStick.right.x, this.joyStick.right.y);
			ctx.lineTo(this.joyStick.right.x, this.joyStick.right.y - (this.joyStick.right.height * 0.5));
			ctx.lineTo(this.joyStick.right.x + this.joyStick.right.width, this.joyStick.right.y);
			ctx.lineTo(this.joyStick.right.x, this.joyStick.right.y + (this.joyStick.right.height * 0.5));		
			ctx.fill();
			//up
			ctx.beginPath();
			ctx.moveTo(this.joyStick.up.x, this.joyStick.up.y);
			ctx.lineTo(this.joyStick.up.x + (this.joyStick.up.width * 0.5), this.joyStick.up.y + this.joyStick.up.height);
			ctx.lineTo(this.joyStick.up.x - (this.joyStick.up.width * 0.5), this.joyStick.up.y + this.joyStick.up.height);
			ctx.fill();
			//down
			ctx.beginPath();
			ctx.moveTo(this.joyStick.down.x, this.joyStick.down.y);
			ctx.lineTo(this.joyStick.down.x + this.joyStick.down.width, this.joyStick.down.y);
			ctx.lineTo(this.joyStick.down.x + (this.joyStick.down.width * 0.5), this.joyStick.down.y + this.joyStick.down.height);
			ctx.fill();
			//shoot
			ctx.drawImage(crayonImages.shoot, this.joyStick.shoot.x, this.joyStick.shoot.y, this.joyStick.shoot.width, this.joyStick.shoot.height);
		}
		ctx.globalAlpha = 1;
	}
};
crayonUI.joyStick.left.x = sprtHtControl * 1;
crayonUI.joyStick.left.y = sprtHtControl * 11;
crayonUI.joyStick.left.width = sprtHtControl * 1.8;
crayonUI.joyStick.left.height = sprtHtControl * 1.8;

crayonUI.joyStick.right.x = sprtHtControl * 6;
crayonUI.joyStick.right.y = sprtHtControl * 11;
crayonUI.joyStick.right.width = sprtHtControl * 1.8;
crayonUI.joyStick.right.height = sprtHtControl * 1.8;

crayonUI.joyStick.up.x = sprtHtControl * 4.4;
crayonUI.joyStick.up.y = sprtHtControl * 7.5;
crayonUI.joyStick.up.width = sprtHtControl * 1.8;
crayonUI.joyStick.up.height = sprtHtControl * 1.8;

crayonUI.joyStick.down.x = sprtHtControl * 3.5;
crayonUI.joyStick.down.y = sprtHtControl * 12.5;
crayonUI.joyStick.down.width = sprtHtControl * 1.8;
crayonUI.joyStick.down.height = sprtHtControl * 1.8;

crayonUI.joyStick.shoot.x = sprtHtControl * 24;
crayonUI.joyStick.shoot.y = sprtHtControl * 10;
crayonUI.joyStick.shoot.width = sprtHtControl * 3;
crayonUI.joyStick.shoot.height = sprtHtControl * 3;
