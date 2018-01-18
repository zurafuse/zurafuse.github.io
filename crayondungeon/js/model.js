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
var dirLead = "down";

var gridWidth = 29;
var gridHeight = 15;
var sprtHtControl = canvas.width / gridWidth;

canvas.height = sprtHtControl * gridHeight;

if (window.innerWidth < window.innerHeight)
{
	canvas.height = canvas.height * 2;
}

//determine if the screen is on a mobile devices
var isMobile = true;
var canvasBad = false;

var crayonImages = {
	player: new Image(),
	shoot: new Image(),
	run: function(){
		this.player.src = "images/player.png";
		this.shoot.src = "images/shoot.png";
	}
};
crayonImages.run();

var player = {
	x: 30,
	y: 30,
	width: sprtHtControl,
	height: sprtHtControl,
	sx: 0,
	sy: 0,
	swidth: 50,
	sheight: 50,
	speed: sprtHtControl * 0.15,
	attack: false,
	counter: 0,
	update: function(){
		//use counter to handle animations that should be slower than 60 fps
		this.counter++;
		if (this.counter > 3)
		{
			this.counter = 0;
		}
		//determine movement based on key pressed
		if(keysDown[39] == true)
		{
			this.sy = 100;
			this.x+= this.speed;
		}
		if(keysDown[37] == true)
		{
			this.sy = 150;
			this.x-= this.speed;
		}
		if(keysDown[38] == true)
		{
			this.sy = 50;
			this.y-= this.speed;
		}	
		if(keysDown[40] == true)
		{
			this.sy = 0;
			this.y+= this.speed;
		}	
		if(keysDown[32] == true)
		{
			this.attack = true;
		}
		if (this.sx > 151)
		{
			this.sx = 0;
		}
		//draw onto the canvas.
		ctx.drawImage(crayonImages.player, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
		//if the player is moving, animate him.
		if ((keysDown[39] == true || keysDown[37] == true || keysDown[38] == true || keysDown[40] == true) && this.counter == 3){
			this.sx += 50;
		}
	}
};

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
		if (isMobile == true)
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