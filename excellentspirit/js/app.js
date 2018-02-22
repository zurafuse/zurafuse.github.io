//create an array for users, trophies, prizes and quests.
var ESuserArray = [];
var EStrophyArray = [];
var ESprizeArray = [];
var ESquestArray = [];

//for each user, create a new "ESuser".
for (i = 0; i < ES_Users.length; i++)
{
	ESuserArray.push(new ESuser(ES_Users[i].img, ES_Users[i].name, ES_Users[i].nick_name, 
	ES_Users[i].id, ES_Users[i].money, ES_Users[i].health, ES_Users[i].demerits, ES_Users[i].stat, 
	ES_Users[i].trophies, ES_Users[i].prizes, ES_Users[i].title, ES_Users[i].stars, ES_Users[i].xp));
}
//for each trophy, create a new "EStrophy".
for (i = 0; i < ES_Trophies.length; i++)
{
	EStrophyArray.push(new EStrophy(ES_Trophies[i].img, ES_Trophies[i].name, ES_Trophies[i].description, 
	ES_Trophies[i].id));
}
//for each prize, create a new "ESprize".
for (i = 0; i < ES_Prizes.length; i++)
{
	ESprizeArray.push(new ESprize(ES_Prizes[i].img, ES_Prizes[i].name, ES_Prizes[i].description, 
	ES_Prizes[i].id, ES_Prizes[i].cost));
}
//for each quest, create a new "ESquest".
for (i = 0; i < ES_Quests.length; i++)
{
	ESquestArray.push(new ESquest(ES_Quests[i].img, ES_Quests[i].name, ES_Quests[i].description, 
	ES_Quests[i].id, ES_Quests[i].user, ES_Quests[i].complete, ES_Quests[i].awards, ES_Quests[i].update));
}



//perform an update to see if any trophies should be automatically assigned.
for (i = 0; i < ES_Trophies.length; i++)
{
	ES_Trophies[i].update();
}

var viewPlayers = function(){
	$(".container-fluid").remove();
	$("body").append("<h2 class='title'>PLEASE SELECT A PLAYER.</h2><br><div class='container-fluid'><div class='row players'>");
	for (i in ESuserArray)
	{
		$(".players").append("<div class='col-sm avatar-name' id='user" + ESuserArray[i].id + "'><h3>" + ESuserArray[i].name +
		"</h3>" + "<h5>" + ESuserArray[i].nickName + "</h5>" + "<img src='" + ESuserArray[i].img + "' alt='Avatar' class='img-responsive'/><br></div>");	
	}
	$("body").append("</div></div>");
	$(".avatar-name").click("click", function(){viewStatPage(this.id)});
};

viewPlayers();


