// Check browser support for local storage
if (typeof(Storage) !== "undefined")
{
    // Retrieve
	if (localStorage.lscounter)
	{
		var questCounter = parseInt(localStorage.getItem("lscounter"));
	}
	else
	{
		localStorage.setItem("lscounter", 0);
		var questCounter = 0;
	}
	if (localStorage.lsscore)
	{
		var myScore = parseInt(localStorage.getItem("lsscore"));
	}
	else
	{
		localStorage.setItem("lsscore", 0);
		var myScore = 0;
	}
	
	if (localStorage.subArray)
	{
		var answerSub = JSON.parse(localStorage.getItem("subArray"));
	}
	else
	{
		var answerSub = [examQuest.length - 1];
		localStorage.setItem("subArray", JSON.stringify(answerSub));
	}
}
else
{
    var questCounter = 0;
	var myScore = 0;
}
//end of local storage


var questNum = questCounter + 1;
var examEnd = false;

var parent = document.getElementById("choices");
var parent2 = document.getElementById("question section");
var parent3 = document.getElementById("submitCol");
var child1 = document.getElementById("choice1");
var child2 = document.getElementById("choice2");
var child3 = document.getElementById("choice3");
var child4 = document.getElementById("choice4");
var childa = document.getElementById("choicea");	
var childb = document.getElementById("choiceb");
var childc = document.getElementById("choicec");
var childd = document.getElementById("choiced");
var childQuest = document.getElementById("question");
var childButton = document.getElementById("theButton");

function startUp(){
	document.getElementById("questnum").innerHTML = "Question " + " " + questNum;
	document.getElementById("question").innerHTML = examQuest[questCounter].question;
	document.getElementById("choice1").innerHTML = examQuest[questCounter].choicea;
	document.getElementById("choice2").innerHTML = examQuest[questCounter].choiceb;
	document.getElementById("choice3").innerHTML = examQuest[questCounter].choicec;
	document.getElementById("choice4").innerHTML = examQuest[questCounter].choiced;

}

window.onload = startUp;

function startOver(){
	var doIt = confirm("If you confirm, all of your answered questions will be wiped out and you will need to start over. Are you sure?");
	if (doIt == true)
	{
		if (examEnd == false)
		{
			myScore = 0;
			questCounter = 0;
			answerSub = [0];
			answerSub = [examQuest.length - 1];
			questNum = questCounter + 1;
			
		// Check browser support for local storage
		if (typeof(Storage) !== "undefined")
		{
		// Store
			localStorage.setItem("lscounter", questCounter);
			localStorage.setItem("lsscore", myScore);
		localStorage.setItem("subArray", JSON.stringify(answerSub));
		}
			
			document.getElementById("questnum").innerHTML = "Question " + " " + questNum;
			document.getElementById("question").innerHTML = examQuest[questCounter].question;
			document.getElementById("choice1").innerHTML = examQuest[questCounter].choicea;
			document.getElementById("choice2").innerHTML = examQuest[questCounter].choiceb;
			document.getElementById("choice3").innerHTML = examQuest[questCounter].choicec;
			document.getElementById("choice4").innerHTML = examQuest[questCounter].choiced;
			
			document.getElementById("choicea").checked = false;
			document.getElementById("choiceb").checked = false;
			document.getElementById("choicec").checked = false;
			document.getElementById("choiced").checked = false;
			
		}
		else
		{
			myScore = 0;
			questCounter = 0;
			answerSub = [0];
			answerSub = [examQuest.length - 1];
			questNum = questCounter + 1;
			examEnd = false;
			// Check browser support for local storage
			if (typeof(Storage) !== "undefined")
			{
			// Store
				localStorage.setItem("lscounter", questCounter);
				localStorage.setItem("lsscore", myScore);
				localStorage.setItem("subArray", JSON.stringify(answerSub));
			}
			location.reload();	
		}
	}
}


function questSubmit(){
	if (document.getElementById("choicea").checked == true)
	{
		answerSub[questCounter] = "A";
	}
	else if (document.getElementById("choiceb").checked == true)
	{
		answerSub[questCounter] = "B";
	}
	else if (document.getElementById("choicec").checked == true)
	{
		answerSub[questCounter] = "C";
	}
	else if (document.getElementById("choiced").checked == true)
	{
		answerSub[questCounter] = "D";
	}
	else
	{
		answerSub[questCounter] = "NOTHING";
	}
	
	if (answerSub[questCounter] == "NOTHING")
	{
		alert("You cannot move on until you have selected an answer!");
	}
	else
	{
		if (answerSub[questCounter] == examQuest[questCounter].answer)
		{
			myScore++;
		}
		
		questCounter++;
		questNum = questCounter + 1;
		
		if (questCounter > examQuest.length - 1)
		{
			questCounter = 0;
			finalResults();
		}
		else
		{	
			document.getElementById("questnum").innerHTML = "Question " + " " + questNum;
			document.getElementById("question").innerHTML = examQuest[questCounter].question;
			document.getElementById("choicea").checked = false;
			document.getElementById("choiceb").checked = false;
			document.getElementById("choicec").checked = false;
			document.getElementById("choiced").checked = false;
			
			document.getElementById("choice1").innerHTML = examQuest[questCounter].choicea;
			document.getElementById("choice2").innerHTML = examQuest[questCounter].choiceb;
			document.getElementById("choice3").innerHTML = examQuest[questCounter].choicec;
			document.getElementById("choice4").innerHTML = examQuest[questCounter].choiced;
			
		}
		// Check browser support for local storage
		if (typeof(Storage) !== "undefined")
		{
		// Store
			localStorage.setItem("lscounter", questCounter);
			localStorage.setItem("lsscore", myScore);
			localStorage.setItem("subArray", JSON.stringify(answerSub));
		}
	}
}

function finalResults()
{
	examEnd = true;
	parent = document.getElementById("choices");
	parent2 = document.getElementById("question section");
	parent3 = document.getElementById("submitCol");
	parent4 = document.getElementById("clearCol");

	child1 = document.getElementById("choice1");
	child2 = document.getElementById("choice2");
	child3 = document.getElementById("choice3");
	child4 = document.getElementById("choice4");
	childa = document.getElementById("choicea");	
	childb = document.getElementById("choiceb");
	childc = document.getElementById("choicec");
	childd = document.getElementById("choiced");
	childQuest = document.getElementById("question");
	childButton = document.getElementById("theButton");
	
	parent.removeChild(child1);
	parent.removeChild(child2);
	parent.removeChild(child3);
	parent.removeChild(child4);
	parent.removeChild(childa);
	parent.removeChild(childb);
	parent.removeChild(childc);
	parent.removeChild(childd);
	parent2.removeChild(childQuest);
	parent3.removeChild(theButton);
	
	var br = document.createElement("br");
    var foo = document.getElementById("question section");

	document.getElementById("myHead").innerHTML = "PRACTICE EXAM RESULTS";
	document.getElementById("questnum").innerHTML = ((myScore / examQuest.length) * 100) + "%. You correctly answered " + myScore + " questions out of " + examQuest.length +" questions.";

    foo.appendChild(br);
	
	for (i = 0; i < examQuest.length; i++)
	{
    var paraQuest = document.getElementById("question section");
	var para = document.createElement("p");
	var para2 = document.createElement("p");
	var para2B = document.createElement("p");
	var para3 = document.createElement("p");
	var para4 = document.createElement("p");
	var questNumNode;
	var questNode;
	var resultNode;
	var answerNode;
	var answer2Node;
	var answer3Node;
	var myBreak = document.createElement("br");
	
//retrieve the answer based on the multiple choice selection
	if (answerSub[i] == "A")
	{
		answer2Node = document.createTextNode("You selected: A. " + examQuest[i].choicea.substring(33));
	}
	if (answerSub[i] == "B")
	{
		answer2Node = document.createTextNode("You selected: B. " + examQuest[i].choiceb.substring(33));
	}
	if (answerSub[i] == "C")
	{
		answer2Node = document.createTextNode("You selected: C. " + examQuest[i].choicec.substring(33));
	}
	if (answerSub[i] == "D")
	{
		answer2Node = document.createTextNode("You selected: D. " + examQuest[i].choiced.substring(33));
	}

//Identify the correct answer
	if (examQuest[i].answer == "A")
	{
		answer3Node = examQuest[i].choicea.substring(33);
	}
	if (examQuest[i].answer == "B")
	{
		answer3Node = examQuest[i].choiceb.substring(33);
	}
	if (examQuest[i].answer == "C")
	{
		answer3Node = examQuest[i].choicec.substring(33);
	}
	if (examQuest[i].answer == "D")
	{
		answer3Node = examQuest[i].choiced.substring(33);
	}
//******
	
		questNumNode = document.createTextNode("QUESTION " + (i + 1));
		questNode = document.createTextNode(examQuest[i].question);
	
		if (answerSub[i] == examQuest[i].answer)
		{
			resultNode = document.createTextNode("CORRECT");
		}
		else
		{
			resultNode = document.createTextNode("WRONG");
		}

		answerNode = document.createTextNode("The correct answer was: " + examQuest[i].answer + ". " + answer3Node);	
		

		para.appendChild(questNumNode);
		para2.appendChild(questNode);
		para2B.appendChild(answer2Node);
		para3.appendChild(resultNode);
		para4.appendChild(answerNode);	
		
		paraQuest.appendChild(para);
		paraQuest.appendChild(para2);
		paraQuest.appendChild(para2B);
		paraQuest.appendChild(para3);
		paraQuest.appendChild(para4);
		paraQuest.appendChild(myBreak);
		
			myScore = 0;
			questCounter = 0;
			questNum = questCounter + 1;
			
		// Check browser support for local storage
		if (typeof(Storage) !== "undefined")
		{
		// Store
			localStorage.setItem("lscounter", questCounter);
			localStorage.setItem("lsscore", myScore);
			localStorage.setItem("subArray", JSON.stringify(answerSub));
		}	
		
	}
}





