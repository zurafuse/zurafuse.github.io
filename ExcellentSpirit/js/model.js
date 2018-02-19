

//populate users from a database or AJAX call (preferably in JSON format).
//For a demo, these are hardcoded for now. The "id" property will be a unique identification number, probably assigned by a database.
var ES_Users = 
[
	{
		img: "images/kaden.png",
		img2: "images/kaden_tall.png", 
		name: "Kaden", nick_name: "Ninja Kaden",
		id: 000,
		money: 0,
		health: 100,
		demerits: 0,
		stat : "healthy",
		trophies: [101, 102],
		title: "warrior",
		stars: 0,
		xp: 0
	}, 
	{
		img: "images/josiah.png", 
		img2: "images/josiah_tall.png", 
		name: "Josiah", 
		id: 001,
		nick_name: "Super Yoshi",
		money: 0,
		health: 100,
		demerits: 0,
		stat : "healthy",
		trophies: [101],
		title: "warrior",
		stars: 0,
		xp: 0
	}
];

//These trophies will be populated from a database, probably via AJAX call.
//The "update" function of these trophies will loop through users and tasks and determine if
//the trophy should be automatically assigned to anyone. A user can only have one of each trophy, so check for the existence of "this" trophy before assigning its id to a user.
var ES_Trophies = [
	{
		name: "Trophy of Justice",
		description: "Sample Trophy.",
		id: 101,
		img: "images/trophy1.png",
		update: function(){
			//The "update" function of these trophies will loop through users and tasks.
		}		
	},
	{
		name: "Trophy of Power",
		description: "Sample Trophy.",
		id: 102,
		img: "images/trophy2.png",
		update: function(){
			//The "update" function of these trophies will loop through users and tasks.
		}		
	}
];
//Prizes will be populated by the database, probably via AJAX call.
var ES_Prizes = [
	{
		name: "Phineas and Ferb",
		description: "Allowance to watch 2 episodes of Phineas and Ferb.",
		id: 202,
		img: "images/phineas.png",
		cost: 0
	}
];
//Quests will be populated from the database via AJAX call. Values are hardcoded for now.
//The update function will be called to determine if the quest is complete or not. You can assign a quest to a user.
var ES_Quests = [
	{
		name: "",
		description: "",
		id: 301,
		complete: false,
		img: "",
		user: 000,
		awards: [],
		update: function(){
			//call this function when quest is complete, or to find out if it is complete.
		}
	},
	{
		name: "",
		description: "",
		id: 302,
		complete: false,
		img: "",
		user: 001,
		awards: [],
		update: function(){
			//call this function when quest is complete, or to find out if it is complete.
		}		
	}
];

//This is the user class that will be used to populate the user array.
var ESuser = function(img, imgTall, name, nickName, id, money, health, demerits, stat, trophies, title, stars, xp){
	this.health = health;
	this.money = money;
	this.demerits = demerits;
	this.stat = stat;
	this.img = img;
	this.imgTall = imgTall;
	this.nickName = nickName;
	this.id = id;
	this.name = name;
	this.trophies = trophies;
	this.title = title;
	this.level = 0;
	this.stars = stars;
	this.xp = xp;	
};
//Trophy class
var EStrophy = function(img, name, description, id){
	this.img = img;
	this.name = name;
	this.description = description;
	this.id = id;
};
//Prize class
var ESprize = function(img, name, description, id, cost){
	this.img = img;
	this.name = name;
	this.description = description;
	this.id = id;
	this.cost = cost;
};
//Quest class
var ESquest = function(img, name, description, id, user, isComplete, awards, update){
	this.img = img;
	this.name = name;
	this.description = description;
	this.id = id;
	this.user = user;
	this.complete = isComplete;
	this.awards = awards;
	this.update = update;
};

//create an array for users, trophies, prizes and quests.
var ESuserArray = [];
var EStrophyArray = [];
var ESprizeArray = [];
var ESquestArray = [];

//for each user, create a new "ESuser".
for (i = 0; i < ES_Users.length; i++)
{
	ESuserArray.push(new ESuser(ES_Users[i].img, ES_Users[i].img2, ES_Users[i].name, ES_Users[i].nick_name, 
	ES_Users[i].id, ES_Users[i].money, ES_Users[i].heath, ES_Users[i].demerits, ES_Users[i].stat, 
	ES_Users[i].trophies, ES_Users[i].title, ES_Users[i].stars, ES_Users[i].xp));
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

