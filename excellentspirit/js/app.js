
//create an array for users, trophies, prizes and quests.
var ESuserArray = [];
var EStrophyArray = [];
var ESprizeArray = [];
var ESquestArray = [];
var ESactivityArray = [];

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
//for each activity, create a new "ESactivity".
for (i = 0; i < ES_Activities.length; i++)
{
	ESactivityArray.push(new ESactivity(ES_Activities[i].user, ES_Activities[i].txt, ES_Activities[i].date));
}


//perform an update to see if any trophies should be automatically assigned.
for (i = 0; i < ES_Trophies.length; i++)
{
	ES_Trophies[i].update();
}

//function to update each user's Level based on experience points.
var updateLevel = function(user){
	if (user.xp > 100)
	{
		user.level = 1;
	}
	if (user.xp > 200)
	{
		user.level = 2;
	}
	if (user.xp > 300)
	{
		user.level = 3;
	}
};

for (i = 0; i < ESuserArray.length; i++)
{
	updateLevel(ESuserArray[i]);
}