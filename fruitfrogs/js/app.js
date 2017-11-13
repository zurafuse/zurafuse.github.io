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
var fruit = [];

bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));

frogs.push(new frogClass(imageObj.frog, canvas.width * Math.random(), canvas.height * Math.random(), 75, 75));
frogs.push(new frogClass(imageObj.frog, canvas.width * Math.random(), canvas.height * Math.random(), 75, 75));
frogs.push(new frogClass(imageObj.frog, canvas.width * Math.random(), canvas.height * Math.random(), 75, 75));
frogs.push(new frogClass(imageObj.frog, canvas.width * Math.random(), canvas.height * Math.random(), 75, 75));

fruit.push(new fruitClass(imageObj.fruit, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50, imageObj.fruit.pineapple));

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

function frogSeeYou(array, Xtouch, Ytouch){
	for (i in array)
	{
		//Let frogs look at direction of touch point
		if (Xtouch < array[i].x - canvas.width * .2 && Ytouch < array[i].y + canvas.height * .33
			&& Ytouch > array[i].y - (canvas.height * 0.2))
		{
			array[i].sy = 200;
		}
		else if (Xtouch > array[i].x + canvas.width * .2 && Ytouch < array[i].y + canvas.height * .33
			&& Ytouch > array[i].y - (canvas.height * 0.2))
		{
			array[i].sy = 100;
		}
		else if (Ytouch < array[i].y)
		{
			array[i].sy = 300;
		}
		else if (Ytouch > array[i].y)
		{
			array[i].sy = 0;
		}
	}
}