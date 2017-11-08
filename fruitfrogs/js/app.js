//define requestAnimFrame for each browser. If the browser is too old to comprehend the power of requestAnimationFrame, use setTimeout instead.
var requestAnimFrame =  window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function(callback) {
                        window.setTimeout(callback, 1000 / 1);
                    };
					
var bronsters = [];
var frogs = [];

bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));

frogs.push(new frogClass(imageObj.frog, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));
frogs.push(new frogClass(imageObj.frog, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));
frogs.push(new frogClass(imageObj.frog, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));
frogs.push(new frogClass(imageObj.frog, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));

function touchMonster(array, Xtouch, Ytouch){
	for (i in array)
	{
		//use offSet to show grace and make touch events more likely
		var offSet = 0.9;
		if (Xtouch > array[i].x * offSet && Xtouch * offSet < array[i].x + array[i].width &&
		Ytouch > array[i].y * offSet && Ytouch * offSet < array[i].y + array[i].height)
		{
			if (array[i].state != "dead")
			{
				array[i].state = "dead";
			}
		}
	}
}