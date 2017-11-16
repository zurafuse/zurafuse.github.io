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

bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 50, 50));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 50, 50));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 50, 50));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 50, 50));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 50, 50));

frogs.push(new frogClass(imageObj.frog, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 75, 75));
frogs.push(new frogClass(imageObj.frog, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 75, 75));
frogs.push(new frogClass(imageObj.frog, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 75, 75));
frogs.push(new frogClass(imageObj.frog, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 75, 75));

fruit.push(new fruitClass(imageObj.fruit, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 77, 77, imageObj.fruit.pineapple));
fruit.push(new fruitClass(imageObj.fruit, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 77, 77, imageObj.fruit.lemon));
fruit.push(new fruitClass(imageObj.fruit, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 77, 77, imageObj.fruit.apple));
fruit.push(new fruitClass(imageObj.fruit, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 77, 77, imageObj.fruit.strawberry));
fruit.push(new fruitClass(imageObj.fruit, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 77, 77, imageObj.fruit.cherry));
fruit.push(new fruitClass(imageObj.fruit, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 77, 77, imageObj.fruit.plumb));
fruit.push(new fruitClass(imageObj.fruit, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 77, 77, imageObj.fruit.banana));
fruit.push(new fruitClass(imageObj.fruit, canvas.width * (Math.random() * .9), canvas.height * (Math.random() * .9), 77, 77, imageObj.fruit.blueberry));

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

function touchFruit(array, Xtouch, Ytouch, isEnd){
	for (i in array)
	{
		//use offSet to show grace and make touch events more likely
		var offSet = 0.7;
		if (Xtouch > array[i].x * offSet && Xtouch * offSet < array[i].x + array[i].width &&
		Ytouch > array[i].y * offSet && Ytouch * offSet < array[i].y + array[i].height)
		{
			if (isEnd == true)
			{
				array[i].isTouched = false;
			}
			else
			{
				//Give the fruit a status of touched if it is being touched
				array[i].isTouched = true;
				//drag fruit
				array[i].x = Xtouch - array[i].width * .55;
				array[i].y = Ytouch - array[i].height * .55;
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