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
	$(".container").append("<div class='row'><div class='col-md'><div class='row'><p>" + thisUser.name + 
		" (" + thisUser.nickName + ")</p></div><div class='row'><p>Rank: " + thisUser.title + "</p></div>" + 
		"<div class='row'><p>Level: " + thisUser.level + "</p></div>" + 
		"<div class='row'><p>Experience Points: " + thisUser.xp + "</p></div>" + 
		"<div class='row'><p>Coins: " + thisUser.money + "</p></div></div>" + 
		"<div class='col-md'><img src='" + thisUser.img + "' alt='avatar'></div></div>" + 
		"<div class='row'><div class='col-md'><div class='row'><p>Health: " + 
		thisUser.health + "</p></div><div class='row'><p>Stars: " + thisUser.stars + 
		"</p></div></div><div class='col-md'><div class='row'><p>Status: " + thisUser.stat + 
		"</p></div><div class='row'><p>Demerits: " + thisUser.demerits + "</p></div></div></div>" + 
		"<div class='row'><p>Trophies: </p></div></div>");
};	



