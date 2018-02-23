var viewPlayers = function(){
	$("br").remove();
	$(".title").remove();
	$(".container-fluid").remove();
	$("body").append("<h2 class='title'>PLEASE SELECT A PLAYER</h2><br><div class='container-fluid'><div class='row players'></div></div>");
	for (i in ESuserArray)
	{
		$(".players").append("<div class='col-sm avatar-name' id='user" + ESuserArray[i].id + "'><h3>" + ESuserArray[i].name +
		"</h3>" + "<h5>" + ESuserArray[i].nickName + "</h5>" + "<img src='" + ESuserArray[i].img + "' alt='Avatar' class='img-responsive'/><br></div>");	
	}
	$(".avatar-name").click("click", function(){viewStatPage(this.id)});
};

viewPlayers();

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
	$(".container-fluid").remove();
	$("body").append("<div class='container-fluid'></div>");
	$(".container-fluid").append("<div class='row'><div class='col-sm-4'><img src='" + thisUser.img + "' alt='avatar' class='img-responsive'></div>" + 
		"<div class='col-sm-8'><div class='row'><p>" + thisUser.name + 
		" (" + thisUser.nickName + ")</p></div><div class='row'><p>Rank: " + thisUser.title + "</p></div>" + 
		"<div class='row'><p>Level: " + thisUser.level + "</p></div>" + "<div class='row'><p>Experience Points: " + 
		thisUser.xp + "</p></div>" + "<div class='row'><p>Coins: " + thisUser.money + "</p></div></div></div>" + 
		"<div class='row'><div class='col-sm-4'><div class='row'><p>Health: " + thisUser.health + "</p></div><div class='row'><p>Stars: " + 
		thisUser.stars + "</p></div><div class='row user-prizes'>Prizes (" + thisUser.prizes.length + ")</div><div class='row user-quests'>Quests" + 
		"</div></div><div class='col-sm-8'><div class='row'><p>Status: " + thisUser.stat + 
		"</p></div><div class='row'><p>Demerits: " + thisUser.demerits + "</p></div><div class='row user-trophies'><p>Trophies (" + 
		thisUser.trophies.length + ")</p></div></div></div>");
		$(".user-trophies").click("click", function(){getTrophies(thisUser)});
		$(".user-prizes").click("click", function(){getPrizes(thisUser)});
		$(".user-quests").click("click", function(){getQuests(thisUser)});
}

var getTrophies = function(thisUser){	
	//display all trophies associated with user
	if (thisUser.trophies.length > 0)
	{
		$(".container-fluid").remove();
		$("body").append("<div class='container-fluid'><div class='row'><p>Trophies:</p></div></div>");
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
		$(".container-fluid").append("<p class='player-return'>Return to " + thisUser.name + "</p>");
		$(".player-return").click("click", function(){viewStatPage("user" + thisUser.id)});
	}
};

var getPrizes = function(thisUser){
	//display all prizes associated with user
	if (thisUser.prizes.length > 0)
	{
		$(".container-fluid").remove();
		$("body").append("<div class='container-fluid'><div class='row'><p>Prizes:</p></div></div>");
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
		$(".container-fluid").append("<p class='player-return'>Return to " + thisUser.name + "</p>");
		$(".player-return").click("click", function(){viewStatPage("user" + thisUser.id)});
	}
};

var getQuests = function(thisUser){
	var isQuests = false;
	//display all tasks assigned to user
	if (ESquestArray.length > 0)
	{
		$(".container-fluid").remove();
		$("body").append("<div class='container-fluid'><div class='row'><p>Quests:</p></div></div>");
		for (i = 0; i < ESquestArray.length; i++)
		{
				if (thisUser.id == ESquestArray[i].user)
				{
					isQuests = true;
					$(".container-fluid").append("<p>" + ESquestArray[i].name + ": " + ESquestArray[i].description + "</p>");
				}
		}
	}
	if (isQuests == false)
	{
		$("body").append("<p>No Quests currently assigned to this user.</p>");
	}
		$(".container-fluid").append("<p class='player-return'>Return to " + thisUser.name + "</p>");
		$(".player-return").click("click", function(){viewStatPage("user" + thisUser.id)});
};	

var viewTrophies = function(){	
	//display all trophies
		$(".title").remove();
		$(".container-fluid").remove();
		$("body").append("<div class='container-fluid'><div class='row'><p>Trophies:</p></div></div>");
			for (i = 0; i < EStrophyArray.length; i++)
			{
					$(".container-fluid").append("<div class='row'><img src='" + 
					EStrophyArray[i].img + "' alt='trophy' /></div>");
			}
};

var viewPrizes = function(){	
	//display all prizes
		$(".title").remove();
		$(".container-fluid").remove();
		$("body").append("<div class='container-fluid'><div class='row'><p>Prizes:</p></div></div>");
			for (i = 0; i < ESprizeArray.length; i++)
			{
					$(".container-fluid").append("<div class='row'><img src='" + 
					ESprizeArray[i].img + "' alt='prize' /></div>");
			}
};

var viewQuests = function(){	
	//display all quests
		$(".title").remove();
		$(".container-fluid").remove();
		$("body").append("<div class='container-fluid'><div class='row'><p>Available Quests:</p></div></div>");
			for (i = 0; i < ESquestArray.length; i++)
			{
				if (ESquestArray[i].user != null && ESquestArray[i].user != undefined && ESquestArray[i].user != 0)
				{
					var thisUser = {};
					for (j = 0; j < ESuserArray.length; j++)
					{
						if (ESuserArray[j].id == ESquestArray[i].user)
						{
							thisUser = ESuserArray[j];
						}
					}
					$(".container-fluid").append("<div class='row'>" + ESquestArray[i].name + ": " + ESquestArray[i].description + 
					", assigned to " + thisUser.name + "</div>");
				}
				else
				{
					$(".container-fluid").append("<div class='row'>" + ESquestArray[i].name + ": " + ESquestArray[i].description + "</div>");					
				}
			}
};

var viewActivities = function(){	
	//display all activities
		$(".title").remove();
		$(".container-fluid").remove();
		$("body").append("<div class='container-fluid'><div class='row'><p>Activities:</p></div></div>");
			for (i = 0; i < ESactivityArray.length; i++)
			{
					$(".container-fluid").append("<div class='row'>" + ESactivityArray[i].txt + " (" + ESactivityArray[i].date + ")</div>");
			}
};