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
canvas.width = window.innerWidth - 180;

var gridWidth = 29;
var gridHeight = 15;
var sprtHtControl = canvas.width / gridWidth;

canvas.height = sprtHtControl * gridHeight;

//images
var img = new Image();
var img2 = new Image();
var img3 = new Image();
var img4 = new Image();
var runImage = new Image();
var blockimg = new Image();
var shootImage = new Image();
var frequentImage = new Image();
var healthImage = new Image();
var badGuy = new Image();
var badGuy2 = new Image();
var badGuy3 = new Image();
var breakable = new Image();
var flagImg = new Image();

//load source for all images
img.src = "images/player_animate_front.png";
img2.src = "images/player_animate_back.png";
img3.src = "images/player_animate_right.png";
img4.src = "images/player_animate_left.png";
blockimg.src = "images/block.png";
runImage.src = "images/run.png";
shootImage.src = "images/shoot.png";
frequentImage.src = "images/frequent.png";
healthImage.src = "images/health.png";
badGuy.src = "images/badguy.png";
badGuy2.src = "images/badguy2.png";
badGuy3.src = "images/badguy3.png";
breakable.src = "images/breakable.png";
flagImg.src = "images/flag.png";

//Cache the high score for a future instance of the game.
// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
	if (localStorage.prevHighScore){
    // Retrieve
		var highScore = localStorage.getItem("prevHighScore");
	}
	else{
		localStorage.setItem("prevHighScore", 0);
		var highScore = localStorage.getItem("prevHighScore");
	}
} else {
    var highScore = powerLevel;
}
