

var viewStatPage = function(user){
	var id = Number(user.replace("user", ""));
	var thisUser;
	//identify the user that we're working with
	for (i = 0; i < ESuserArray.length; i++)
	{
		if (ESuserArray[i].id == id)
		{
			thisUser = ESuserArray[i];
			break;
		}
	}
	$(".title").remove();
	$(".players").remove();
	$(".container-fluid").append("<div class='row'><div class='col-sm-6'><div class='row'><p>" + thisUser.name + 
		" (" + thisUser.nickName + ")</p></div><div class='row'><p>Rank: " + thisUser.title + "</p></div>" + 
		"<div class='row'><p>Level: " + thisUser.level + "</p></div>" + 
		"<div class='row'><p>Experience Points: " + thisUser.xp + "</p></div>" + 
		"<div class='row'><p>Coins: " + thisUser.money + "</p></div></div>" + 
		"<div class='col-sm-6'><img src='" + thisUser.img + "' alt='avatar' class='img-responsive'></div></div>" + 
		"<div class='row'><div class='col-sm-6'><div class='row'><p>Health: " + 
		thisUser.health + "</p></div><div class='row'><p>Stars: " + thisUser.stars + 
		"</p></div></div><div class='col-sm-6'><div class='row'><p>Status: " + thisUser.stat + 
		"</p></div><div class='row'><p>Demerits: " + thisUser.demerits + "</p></div></div></div>");
	//display all trophies associated with user
	if (thisUser.trophies.length > 0)
	{
		$(".container-fluid").append("<div class='row'><p>Trophies:</p></div>");
		for (i = 0; i < thisUser.trophies.length; i++)
		{
			for (j = 0; j < EStrophyArray.length; j++)
			{
				if (thisUser.trophies[i] == EStrophyArray[j].id)
				{
					$(".container-fluid").append("<div class='row'><img src='" + 
					EStrophyArray[j].img + "' alt='trophy' /></div>");
				}
			}
		}
	}
	//display all prizes associated with user
	if (thisUser.prizes.length > 0)
	{
		$(".container-fluid").append("<div class='row'><p>Prizes:</p></div>");
		for (i = 0; i < thisUser.prizes.length; i++)
		{
			for (j = 0; j < ESprizeArray.length; j++)
			{
				if (thisUser.prizes[i] == ESprizeArray[j].id)
				{
					$(".container-fluid").append("<div class='row'><img src='" + 
					ESprizeArray[j].img + "' alt='prize' /></div>");
				}
			}
		}
	}
	//display all tasks assigned to user
	if (ESquestArray.length > 0)
	{
		$(".container-fluid").append("<div class='row'><p>Quests:</p></div>");
		for (i = 0; i < ESquestArray.length; i++)
		{
				if (thisUser.id == ESquestArray[i].user)
				{
					$(".container-fluid").append("<p>" + ESquestArray[i].name + ": " + ESquestArray[i].description + "</p>");
				}
		}
	}
};	



