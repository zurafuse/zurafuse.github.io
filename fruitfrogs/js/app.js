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
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));
bronsters.push(new brownMonster(imageObj.badGuys.bronster, canvas.width * Math.random(), canvas.height * Math.random(), 50, 50));



