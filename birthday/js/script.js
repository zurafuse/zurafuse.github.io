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
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth -180;
canvas.height = window.innerHeight;

var Birthday = {
	Counter: 0,
	Image: new Image(),
	x: 0,
	y: 0,
	width: canvas.width * .5,
	height: canvas.width * .4,
	sx: 0,
	sy: 0,
	sWidth: 450,
	sHeight: 450
}

Birthday.Image.src = "images/birthday.jpg";



function Animate (){
	Birthday.Counter++;
	if (Birthday.Counter > 3) {
		Birthday.Counter = 0;
		if (Birthday.sx >= 900)
		{
			Birthday.sx = 0;
			if (Birthday.sy >= 900)
			{
				Birthday.sy = 0;
			}
			else
			{
				Birthday.sy += 450;
			}
		}
		else
		{
			Birthday.sx += 450;
		}
	}
	ctx.drawImage(Birthday.Image, Birthday.sx, Birthday.sy, Birthday.sWidth, Birthday.sHeight, Birthday.x, Birthday.y, Birthday.width, Birthday.height);
	requestAnimFrame(Animate);
}

requestAnimFrame(Animate);


