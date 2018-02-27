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
		"<div class='col-sm-8'><div class='row stat-row'><p class='stat-text'>" + thisUser.name + 
		" (" + thisUser.nickName + ")</p></div><div class='row stat-row'><p class='stat-text'>Rank: " + thisUser.title + "</p></div>" + 
		"<div class='row stat-row'><p class='stat-text'>Level: " + thisUser.level + "</p></div>" + "<div class='row stat-row'><p class='stat-text'>Experience Points: " + 
		thisUser.xp + "</p></div>" + "<div class='row stat-row'><p class='stat-text'>&#164; Coins: " + thisUser.money + "</p></div></div></div>" + 
		"<div class='row'><div class='col-sm-4'><div class='row stat-row'><p class='stat-text'>&#9829; Health: " + thisUser.health + 
		"</p></div><div class='row stat-row'><p class='stat-text'>&#9733 Stars: " + 
		thisUser.stars + "</p></div><div class='row stat-row'><p class='stat-text'>Demerits: " + thisUser.demerits + "</p></div><div class='row stat-row'><p class='stat-text'>Status: " + thisUser.stat + 
		"</p></div></div><div class='col-sm-8'><div class='row stat-row'><button class='user-quests stat-button'>Quests</button></div>" + 
		"<div class='row'><button class='user-prizes stat-button'>Prizes (" + thisUser.prizes.length + 
		")</button></div><div class='row stat-row'><button class='user-trophies stat-button'>Trophies (" + 
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
		$(".main-container").append("<div class='container-fluid es-container'><div class='row'><p class='view-header'>" + thisUser.name +
		"'s Trophies:</p></div>" + 
		"<div class='row trophy-row'></div></div>");
		for (i = 0; i < thisUser.trophies.length; i++)
		{
			for (j = 0; j < EStrophyArray.length; j++)
			{
				if (thisUser.trophies[i] == EStrophyArray[j].id)
				{
					$(".trophy-row").append("<div class='col-sm'><figure><img src='" + EStrophyArray[i].img + 
					"' alt='Trophy' /><figcaption>" + EStrophyArray[i].name + "</figcaption></figure></div>");
				}
			}
		}
		$(".container-fluid").append("<button class='player-return stat-button'>Return to " + thisUser.name + "</button>");
		$(".player-return").click("click", function(){viewStatPage("user" + thisUser.id)});
	}
};

var getPrizes = function(thisUser){
	hideMenu();
	//display all prizes associated with user
	if (thisUser.prizes.length > 0)
	{
		$(".container-fluid").remove();
		$(".main-container").append("<div class='container-fluid es-container'><div class='row'><p class='view-header'>" + thisUser.name +
		"'s Prizes:</p></div>" + 
		"<div class='row prize-row'></div></div>");
		for (i = 0; i < thisUser.prizes.length; i++)
		{
			for (j = 0; j < ESprizeArray.length; j++)
			{
				if (thisUser.prizes[i] == ESprizeArray[j].id)
				{
					$(".prize-row").append("<div class='col-sm'><img src='" + 
					ESprizeArray[j].img + "' class='img-responsive item-img' alt='prize' /></div>");
				}
			}
		}
		$(".container-fluid").append("<button class='player-return stat-button'>Return to " + thisUser.name + "</button>");
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
		$(".main-container").append("<div class='container-fluid es-container'><div class='row'><p class='view-header'>" + 
		thisUser.name + "'s Quests:</p></div></div>");
		for (i = 0; i < ESquestArray.length; i++)
		{
				if (thisUser.id == ESquestArray[i].user)
				{
					isQuests = true;
					$(".container-fluid").append("<p class='stat-text'>" + 
					ESquestArray[i].name + ": " + ESquestArray[i].description + "</p>");
				}
		}
	}
	if (isQuests == false)
	{
		$(".main-container").append("<p class='stat-text'>No Quests currently assigned to this user.</p>");
	}
		$(".container-fluid").append("<button class='player-return stat-button'>Return to " + thisUser.name + "</button>");
		$(".player-return").click("click", function(){viewStatPage("user" + thisUser.id)});
};	

var viewTrophies = function(){
	hideMenu();
	//display all trophies
		$(".title").remove();
		$(".container-fluid").remove();
		$(".main-container").append("<div class='container-fluid es-container'><div class='row'><p class='view-header'>Trophies:</p></div>" + 
		"<div class='row trophy-row'></div></div>");
			for (i = 0; i < EStrophyArray.length; i++)
			{
					$(".trophy-row").append("<div class='col-sm'><figure><img src='" + EStrophyArray[i].img + 
					"' alt='Trophy' /><figcaption>" + EStrophyArray[i].name + "</figcaption></figure></div>");
			}
};

var viewPrizes = function(){
	hideMenu();
	//display all prizes
		$(".title").remove();
		$(".container-fluid").remove();
		$(".main-container").append("<div class='container-fluid es-container'><div class='row'><p class='view-header'>Prizes:</p></div>" + 
		"<div class='row prize-row'></div></div>");
			for (i = 0; i < ESprizeArray.length; i++)
			{
					$(".prize-row").append("<div class='col-sm'><img src='" + 
					ESprizeArray[i].img + "' class='img-responsive item-img' alt='prize' /></div>");
			}
};

var viewQuests = function(){
	hideMenu();
	//display all quests
		$(".title").remove();
		$(".container-fluid").remove();
		$(".main-container").append("<div class='container-fluid es-container'><div class='row'><p class='view-header'>Available Quests:</p></div></div>");
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
					$(".container-fluid").append("<div class='row stat-row'><p class='stat-text'>" + ESquestArray[i].name + ": " + ESquestArray[i].description + 
					", assigned to " + thisUser.name + "</p></div>");
				}
				else
				{
					$(".container-fluid").append("<div class='row stat-row'><p class='stat-text'>" + ESquestArray[i].name + ": " + ESquestArray[i].description + "</p></div>");					
				}
			}
};

var viewActivities = function(){
	hideMenu();
	//display all activities
		$(".title").remove();
		$(".container-fluid").remove();
		$(".main-container").append("<div class='container-fluid es-container'><div class='row'><p class='view-header'>Activities:</p></div></div>");
			for (i = 0; i < ESactivityArray.length; i++)
			{
					$(".container-fluid").append("<div class='row stat-row'><p class='stat-text'>" + ESactivityArray[i].txt + " (" + ESactivityArray[i].date + ")</p></div>");
			}
};
