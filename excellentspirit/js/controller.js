var menu = false;
//Toggle the Menu Button

var showMenu = function(){
	menu = true;
	$(".nav-bar-mobile").css("display", "block");
	$(".menu-icon-img").attr("src", "images/hide-menu-icon.png");	
};

var hideMenu = function(){
	menu = false;
	$(".nav-bar-mobile").css("display", "none");	
	$(".menu-icon-img").attr("src", "images/menu-icon.png");	
}

$(".menu-icon").click("click", function(){
	if (menu == false)
	{
		showMenu();
	}
	else
	{
		hideMenu();
	}
});

var viewPlayers = function(){
	hideMenu();
	var columnCount = 0;
	var playerRow = 0;
	$("br").remove();
	$(".title").remove();
	$(".container-fluid").remove();
	$(".main-container").append("<h2 class='title'>PLEASE SELECT A PLAYER</h2><br><div class='container-fluid'><div class='row players0'></div></div>");
	for (i in ESuserArray)
	{
		if (columnCount > 3)
		{
			columnCount = 0;
			playerRow ++;
			$(".container-fluid").append("<div class='row players" + playerRow +"'></div></div>");
			$(".players" + playerRow).append("<div class='col-sm-3 avatar-col'><div class='avatar-name' id='user" + ESuserArray[i].id + "'><h3>" + ESuserArray[i].name +
			"</h3>" + "<img src='" + ESuserArray[i].img + "' alt='Avatar' class='img-responsive player-img'/>" + "<h5>" + ESuserArray[i].nickName + "</h5>" + "</div><br></div>");
		}
		else
		{
			$(".players" + playerRow).append("<div class='col-sm-3 avatar-col'><div class='avatar-name' id='user" + ESuserArray[i].id + "'><h3>" + ESuserArray[i].name +
			"</h3>" + "<img src='" + ESuserArray[i].img + "' alt='Avatar' class='img-responsive player-img'/>" + "<h5>" + ESuserArray[i].nickName + "</h5>" + "</div><br></div>");
		}
		columnCount++;
	}
	$(".avatar-name").click("click", function(){viewStatPage(this.id)});
};

viewPlayers();

var viewStatPage = function(user){
	hideMenu();
	var id = Number(user.replace("user", ""));
	console.log(user);
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
	$(".main-container").append("<div class='container-fluid es-container'></div>");
	$(".container-fluid").append("<div class='row'><div class='col-sm-4'><img src='" + thisUser.img + "' alt='avatar' class='img-responsive'></div>" + 
		"<div class='col-sm-8'><div class='row'><p>" + thisUser.name + 
		" (" + thisUser.nickName + ")</p></div><div class='row'><p>Rank: " + thisUser.title + "</p></div>" + 
		"<div class='row'><p>Level: " + thisUser.level + "</p></div>" + "<div class='row'><p>Experience Points: " + 
		thisUser.xp + "</p></div>" + "<div class='row'><p>Coins: " + thisUser.money + "</p></div></div></div>" + 
		"<div class='row'><div class='col-sm-4'><div class='row'><p>Health: " + thisUser.health + "</p></div><div class='row'><p>Stars: " + 
		thisUser.stars + "</p></div><div class='row'><button user-prizes>Prizes (" + thisUser.prizes.length + ")</button></div><div class='row'><button user-quests>Quests</button>" + 
		"</div></div><div class='col-sm-8'><div class='row'><p>Status: " + thisUser.stat + 
		"</p></div><div class='row'><p>Demerits: " + thisUser.demerits + "</p></div><div class='row'><button user-trophies>Trophies (" + 
		thisUser.trophies.length + ")</button></div></div></div>");
		$(".user-trophies").click("click", function(){getTrophies(thisUser)});
		$(".user-prizes").click("click", function(){getPrizes(thisUser)});
		$(".user-quests").click("click", function(){getQuests(thisUser)});
}

var getTrophies = function(thisUser){
	hideMenu();
	//display all trophies associated with user
	if (thisUser.trophies.length > 0)
	{
		$(".container-fluid").remove();
		$(".main-container").append("<div class='container-fluid es-container'><div class='row'><p>Trophies:</p></div></div>");
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
	hideMenu();
	//display all prizes associated with user
	if (thisUser.prizes.length > 0)
	{
		$(".container-fluid").remove();
		$(".main-container").append("<div class='container-fluid es-container'><div class='row'><p>Prizes:</p></div></div>");
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
	hideMenu();
	var isQuests = false;
	//display all tasks assigned to user
	if (ESquestArray.length > 0)
	{
		$(".container-fluid").remove();
		$(".main-container").append("<div class='container-fluid es-container'><div class='row'><p>Quests:</p></div></div>");
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
		$(".main-container").append("<p>No Quests currently assigned to this user.</p>");
	}
		$(".container-fluid").append("<p class='player-return'>Return to " + thisUser.name + "</p>");
		$(".player-return").click("click", function(){viewStatPage("user" + thisUser.id)});
};	

var viewTrophies = function(){	
	hideMenu();
	//display all trophies
		$(".title").remove();
		$(".container-fluid").remove();
		$(".main-container").append("<div class='container-fluid es-container'><div class='row'><p>Trophies:</p></div></div>");
			for (i = 0; i < EStrophyArray.length; i++)
			{
					$(".container-fluid").append("<div class='row'><img src='" + 
					EStrophyArray[i].img + "' alt='trophy' /></div>");
			}
};

var viewPrizes = function(){
	hideMenu();
	//display all prizes
		$(".title").remove();
		$(".container-fluid").remove();
		$(".main-container").append("<div class='container-fluid es-container'><div class='row'><p>Prizes:</p></div></div>");
			for (i = 0; i < ESprizeArray.length; i++)
			{
					$(".container-fluid").append("<div class='row'><img src='" + 
					ESprizeArray[i].img + "' alt='prize' /></div>");
			}
};

var viewQuests = function(){
	hideMenu();
	//display all quests
		$(".title").remove();
		$(".container-fluid").remove();
		$(".main-container").append("<div class='container-fluid es-container'><div class='row'><p>Available Quests:</p></div></div>");
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
	hideMenu();
	//display all activities
		$(".title").remove();
		$(".container-fluid").remove();
		$(".main-container").append("<div class='container-fluid es-container'><div class='row'><p>Activities:</p></div></div>");
			for (i = 0; i < ESactivityArray.length; i++)
			{
					$(".container-fluid").append("<div class='row'>" + ESactivityArray[i].txt + " (" + ESactivityArray[i].date + ")</div>");
			}
};
