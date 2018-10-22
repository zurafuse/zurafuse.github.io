var startUp = function()
{
	for (var i = 0; i < questions.length; i++)
	{
		$(".cards").append("<img src=" + questions[i].question + " alt='flash card' class='card-image' /><br><br>");
	}
	
	$(".card-image").click(function(){
		var index = ($(this).index() / 3);
		if (questions[index].state == "question")
		{
			$( this ).attr("src", questions[index].answer);
			questions[index].state = "answer";
		}
		else
		{
			$( this ).attr("src", questions[index].question);
			questions[index].state = "question";		
		}
	});
};

