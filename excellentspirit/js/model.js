

//populate users from a database or AJAX call (preferably in JSON format).
//For a demo, these are hardcoded for now. The "id" property will be a unique identification number, probably assigned by a database.
var ES_Users = 
[
	{
		img: "images/kaden.png", 
		name: "Kaden", nick_name: "Ninja Kaden",
		id: 001,
		money: 0,
		health: 100,
		demerits: 0,
		stat : "healthy",
		trophies: [101, 102],
		prizes: [202, 203],
		title: "warrior",
		stars: 0,
		xp: 0
	}, 
	{
		img: "images/josiah.png", 
		name: "Josiah", 
		id: 002,
		nick_name: "Super Yoshi",
		money: 0,
		health: 100,
		demerits: 0,
		stat : "healthy",
		trophies: [101],
		prizes: [203],
		title: "warrior",
		stars: 0,
		xp: 0
	}
];

//populate from database, possibly via a JSON object passed through AJAX
var ES_Activities = [
	{user: 001, txt: "Kaden has been awarded the Super Star Trophy.", date: "February 21, 2018 10:30 AM"}, 
	{user: 002, txt: "Josiah has won 2 stars.", date: "February 22, 2018 1:30 PM"}
];

//These trophies will be populated from a database, probably via AJAX call.
//The "update" function of these trophies will loop through users and tasks and determine if
//the trophy should be automatically assigned to anyone. A user can only have one of each trophy, so check for the existence of "this" trophy before assigning its id to a user.
var ES_Trophies = [
	{
		name: "Trophy of Justice",
		description: "Sample Trophy.",
		id: 101,
		img: "images/trophies/trophy1.png",
		update: function(){
			//The "update" function of these trophies will loop through users and tasks.
		}		
	},
	{
		name: "Trophy of Power",
		description: "Sample Trophy.",
		id: 102,
		img: "images/trophies/trophy2.png",
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
		img: "images/prizes/phineas.png",
		cost: 0
	},
	{
		name: "$5",
		description: "Shop online and select a prize worth $5.",
		id: 203,
		img: "images/prizes/5dollars.png",
		cost: 0
	}
];
//Quests will be populated from the database via AJAX call. Values are hardcoded for now.
//The update function will be called to determine if the quest is complete or not. You can assign a quest to a user.
var ES_Quests = [
	{
		name: "Task of Cleanliness",
		description: "Clean room",
		id: 301,
		complete: false,
		img: "",
		user: 002,
		awards: [],
		update: function(){
			//call this function when quest is complete, or to find out if it is complete.
		}
	},
	{
		name: "School Journey",
		description: "Make A on Math test today",
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
var ESuser = function(img, name, nickName, id, money, health, demerits, stat, trophies, prizes, title, stars, xp){
	this.health = health;
	this.money = money;
	this.demerits = demerits;
	this.stat = stat;
	this.img = img;
	this.nickName = nickName;
	this.id = id;
	this.name = name;
	this.trophies = trophies;
	this.prizes = prizes;
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
//Activity class
var ESactivity = function(user, txt, date){
	this.user = user;
	this.txt = txt;
	this.date = date;
};