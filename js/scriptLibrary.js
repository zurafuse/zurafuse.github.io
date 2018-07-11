// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementsByClassName("modBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("th-close")[0];


//Define the functions to be called when users use the modal, when they click the "i" icon to 
//see more information about each section on the page.
// When the user clicks the button, open the modal 

//loop through each instance of the information icon and display the modal if the user clicks on one of the icons.
for (i = 0; i < $(".modBtn").length; i++){
	$(".modBtn")[i].onclick = function() {
		var modHead = "TIM HORTON'S PORTFOLIO";
		var modBody = "javascript and web applications created by Timothy Horton.";
		var modFoot = "www.zurafuse.com";
		//display the modal text differently depending on which icon the user clicked on.
		if ($(this).attr("id") === "mod_flick")
		{
			modHead = "FLICKR.COM PAGE";
			modBody = "See my collection of abstract paintings and digital art at my Flickr page.";
			modFoot = "LINK: <a href='http://www.flickr.com/photos/triachan/' target='_blank' style='color: white'>http://www.flickr.com/photos/triachan</a>";			
		}
		else if ($(this).attr("id") === "mod_flag")
		{
			modHead = "FLAG SURVIVAL JAVASCRIPT GAME";
			modBody = "I created this game using pure javascript code. Use the arrow keys to move and the space bar to shoot.";
			modFoot = "LINK: <a href='https://zurafuse.github.io/flagsurvival/' target='_blank' style='color: white'>https://zurafuse.github.io/flagsurvival</a>";			
		}
		else if ($(this).attr("id") === "mod_barcode")
		{
			modHead = "3of9 Barcode_Generator";
			modBody = "I created this barcode generator using Python's Turtle class. This was created for a Udacity Python course.";
			modFoot = "LINK: <a href='https://github.com/zurafuse/Barcode_Generator/' target='_blank' style='color: white'>https://github.com/zurafuse/Barcode_Generator</a>";			
		}
		else if ($(this).attr("id") === "mod_yosef")
		{
			modHead = "THE AMAZING YOSEF";
			modBody = "I created this platform game using only javascript code and some graphics that I created. I added some physics such as gravity and the ability to jump. Use the arrow keys to move around, use the UP arrow key to jump, and use space bar to shoot (Collect the blue soda to gain the power to shoot).";
		
			modFoot = "LINK: <a href='https://zurafuse.github.io/yosef/' target='_blank' style='color: white'>https://zurafuse.github.io/yosef</a>";			
		}
		else if ($(this).attr("id") === "mod_crayon")
		{
			modHead = "Crayon Dungeon";
			modBody = "Crayon Dungeon is an adventure game that I created using nothing but javascript. Save the crayon kingdom from the nightmare of Super Toilet. Notice its responsiveness to use on a mobile device." +
			" See the code at my Github page, at <a href='https://github.com/zurafuse/Crayon-Adventure//' target='_blank'>https://github.com/zurafuse/Crayon-Adventure</a>";
			modFoot = "LINK: <a href='https://zurafuse.github.io/crayondungeon/' target='_blank' style='color: white'>https://zurafuse.github.io/crayondungeon//</a>";		
		}
		else if ($(this).attr("id") === "mod_frogger")
		{
			modHead = "FROGGER CLONE";
			modBody = "I created this javascript game for a Udacity class that I was taking. Graphics and engine provided by Udacity.com";
			modFoot = "LINK: <a href='https://zurafuse.github.io/frogger/' target='_blank' style='color: white'>https://zurafuse.github.io/frogger</a>";		
		}
		else if ($(this).attr("id") === "mod_calc")
		{
			modHead = "JAVASCRIPT CALCULATOR";
			modBody = "I created this calculator using javascript. Notice how the size of the calculator changes based on your device.";
			modFoot = "LINK: <a href='https://zurafuse.github.io/calculator/' target='_blank' style='color: white'>https://zurafuse.github.io/calculator</a>";				
		}
		else if ($(this).attr("id") === "mod_resume")
		{
			modHead = "TIM HORTON'S RESUME";
			modBody = "View my online resume to get an idea of past experience, where I have been and what I have done. References provided upon request.";
			modFoot = "LINK: <a href='resume/index.html' target='_blank' style='color: white'>https://zurafuse.github.io/resume</a>";			
		}
		else if ($(this).attr("id") === "mod_fruitfrog")
		{
			modHead = "FRUIT FROGS";
			modBody = "I created this game with javascript to make my kids laugh. Feed the frogs by dragging the fruit over to them. Destroy enemies by tapping them.";
			modFoot = "LINK: <a href='https://zurafuse.github.io/fruitfrogs/' target='_blank' style='color: white'>https://zurafuse.github.io/fruitfrogs</a>";			
		}
		else if ($(this).attr("id") === "mod_map")
		{
			modHead = "NEIGHBORHOOD MAP OF SLAPOUT";
			modBody = "This is a project I worked on for a class on Udacity.com. It is an interactive map of Slapout, Alabama implementing the Google Maps API. Visit the Github page at <a href='https://github.com/zurafuse/Udacity-Neighborhood-Map/' target='_blank' style='color: black'>https://github.com/zurafuse/Udacity-Neighborhood-Map</a>.";
			modFoot = "LINK: <a href='slapout/index.html' target='_blank' style='color: white'>https://zurafuse.github.io/slapout</a>";		
		}
		else if ($(this).attr("id") === "mod_movie")
		{
			modHead = "Movie Trailer Website";
			modBody = "This is a project I worked on for a class on Udacity.com. This is a movie trailer site generated with Python code. Visit the Github page at <a href='https://github.com/zurafuse/Movie-Site/' target='_blank' style='color: black'>https://github.com/zurafuse/Movie-Site</a>.";
			modFoot = "LINK: <a href='moviesite/index.html' target='_blank' style='color: white'>www.zurafuse.com/moviesite</a>";		
		}
		else if ($(this).attr("id") === "mod_bible")
		{
			modHead = "Bible App Website";
			modBody = "This project is a Bible translation that I am working on (it will probably be years before it is complete, if ever). Visit the Github page at <a href='https://github.com/zurafuse/BibleApp' target='_blank' style='color: black'>https://github.com/zurafuse/BibleApp</a>.";
			modFoot = "LINK: <a href='bible/index.html' target='_blank' style='color: white'>www.zurafuse.com/bible</a>";		
		}
		else if ($(this).attr("id") === "mod_excellent")
		{
			modHead = "EXCELLENT SPIRIT Behavior Application";
			modBody = "This is a web application that I created to organize and track rewards for my children's behavior." + 
			" This is currently only a front-end app, but my intent is for a user to create a model on the back-end" + 
			" with Python and SQL, and use Python Flask and AJAX to pass data to the front-end. Visit the Github page at <a href='https://github.com/zurafuse/ExcellentSpirit/' target='_blank' style='color: black'>https://github.com/zurafuse/ExcellentSpirit</a>.";
			modFoot = "LINK: <a href='excellentspirit/index.html' target='_blank' style='color: white'>www.zurafuse.com/excellentspirit</a>";		
		}
		
		$(".mod-head").html(modHead);
		$(".mod-body").html(modBody);
		$(".mod-foot").html(modFoot);
		modal.style.display = "block";
	}
	$(".modBtn")[i].onmouseover = function() {
		$(this).attr({src : "images/info_hover.png"});
	}
	$(".modBtn")[i].onmouseout = function() {
		$(this).attr({src : "images/info.png"});
	}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
