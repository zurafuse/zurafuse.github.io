//variables
var calcFirst = "";
var calcNext = "";
var calcOper;
var calcTotal = 0;
var calcSwitch = "first";
var operSwitch = "first";
var nextSwitch = "first";
//define number buttons
function pressNumber(Num){
	if (nextSwitch == "first"){
		calcNext = "";
		nextSwitch = "second";
	}
	if (calcSwitch == "first")
	{
		calcFirst = calcFirst + Num;
		document.getElementById("firstBox").innerHTML = calcFirst;
	}
	else
	{
		calcNext = calcNext + Num;
		document.getElementById("nextBox").innerHTML = calcNext;
	}

}
//define operators
function getOper (myOper) {
	if (operSwitch == "second")
	{
		switch(calcOper){
			case "+":
				calcTotal = Number(calcFirst) + Number(calcNext);
				break;
			case "-":
				calcTotal = Number(calcFirst) - Number(calcNext);
				break;
			case "*":
				calcTotal = Number(calcFirst) * Number(calcNext);
				break;
			case "/":
				calcTotal = Number(calcFirst) / Number(calcNext);
				break;
			case "%":
				calcTotal = Number(calcFirst) % Number(calcNext);
				break;
		}
		calcNext = "";
		calcFirst = calcTotal;
		document.getElementById("firstBox").innerHTML = calcFirst;
		document.getElementById("nextBox").innerHTML = "";
	}
	calcOper = myOper;
	document.getElementById("operBox").innerHTML = myOper;
	calcSwitch = "second";
	operSwitch = "second";
	nextSwitch = "first";
}
//calculate function
function calculate(){
	switch(calcOper){
		case "+":
			calcTotal = Number(calcFirst) + Number(calcNext);
			break;
		case "-":
			calcTotal = Number(calcFirst) - Number(calcNext);
			break;
		case "*":
			calcTotal = Number(calcFirst) * Number(calcNext);
			break;
		case "/":
			calcTotal = Number(calcFirst) / Number(calcNext);
			break;
		case "%":
			calcTotal = Number(calcFirst) % Number(calcNext);
			break;
	}
	calcFirst = calcTotal;
	operSwitch = "first";
	nextSwitch = "first";
	document.getElementById("outputBox").innerHTML = calcTotal;
	document.getElementById("firstBox").innerHTML = calcFirst;
	document.getElementById("nextBox").innerHTML = "";
	document.getElementById("operBox").innerHTML = "";
}
//start over
function clearAll(){
	calcFirst = "";
	calcNext = "";
	calcOper = "";
	calcTotal = 0;
	calcSwitch = "first";
	operSwitch = "first";
	nextSwitch = "first";
	document.getElementById("firstBox").innerHTML = "0";
	document.getElementById("outputBox").innerHTML = calcTotal;
	document.getElementById("operBox").innerHTML = calcOper;
	document.getElementById("nextBox").innerHTML = calcNext;
}
//keyboard input
document.addEventListener('keypress', function(event) {
	var keyArray = new Array();
	keyArray[13] = "=";
	keyArray[37] = "%";
	keyArray[42] = "*";
	keyArray[43] = "+";
	keyArray[45] = "-"; 
	keyArray[46] = "."; 
	keyArray[47] = "/"; 
	keyArray[48] = "0"; 
	keyArray[49] = "1"; 
	keyArray[50] = "2"; 
	keyArray[51] = "3"; 
	keyArray[52] = "4"; 
	keyArray[53] = "5"; 
	keyArray[54] = "6";
	keyArray[55] = "7"; 
	keyArray[56] = "8"; 
	keyArray[57] = "9"; 
	keyArray[61] = "="; 
	keyArray[67] = "c"; 
	keyArray[96] = "0"; 
	keyArray[97] = "1"; 
	keyArray[98] = "c"; 
	keyArray[99] = "c"; 
	keyArray[100] = "4";
	keyArray[101] = "5";
	keyArray[102] = "6";
	keyArray[103] = "7";
	keyArray[104] = "8";
	keyArray[105] = "9";
	keyArray[106] = "*";
	keyArray[107] = "+";
	keyArray[109] = "-";
	keyArray[111] = "/";
	keyArray[187] = "=";
	keyArray[189] = "-";
	keyArray[191] = "/";
	
	if (keyArray[event.keyCode] != undefined){
		if (keyArray[event.keyCode] == "c"){
			clearAll();
		}
		else if
		(keyArray [event.keyCode] == "/" ||
		 keyArray [event.keyCode] == "*" ||
		 keyArray [event.keyCode] == "-" ||
		 keyArray [event.keyCode] == "+" ||
		 keyArray [event.keyCode] == "%"){
			getOper(keyArray[event.keyCode]);
		}
		else if (keyArray [event.keyCode] == "="){
			calculate();
		}
		else {
			pressNumber(keyArray[event.keyCode]);
		}
	}
});
