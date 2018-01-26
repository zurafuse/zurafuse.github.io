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
	sword: new Image(),
	run: function(){
		this.player.src = "images/player.png";
		this.shoot.src = "images/shoot.png";
		this.sword.src = "images/sword.png";
	}
};
crayonImages.run();

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
	this.attack =  false;
	this.counter =  0;
}


Player.prototype.update = function(){
		if (this.attack == true){
			this.sx += 50;
			if (this.sx >= 200){
				this.sx = 0;
				this.sy = 0;
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
		if(dir.right == true)
		{
			this.sy = 100;
			this.x+= this.speed;
		}
		if(dir.left == true)
		{
			this.sy = 150;
			this.x-= this.speed;
		}
		if(dir.up == true)
		{
			this.sy = 50;
			this.y-= this.speed;
		}	
		if(dir.down == true)
		{
			this.sy = 0;
			this.y+= this.speed;
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