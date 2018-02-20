//perform an update to see if any trophies should be automatically assigned.
for (i = 0; i < ES_Trophies.length; i++)
{
	ES_Trophies[i].update();
}


$("body").append("<h2 class='title'>PLEASE SELECT A PLAYER.</h2><br><div class='container-fluid'><div class='row players'>");


for (i in ESuserArray)
{
	$(".players").append("<div class='col-sm avatar-name' id='user" + ESuserArray[i].id + "'><h3>" + ESuserArray[i].name +
	"</h3>" + "<h5>" + ESuserArray[i].nickName + "</h5>" + "<img src='" + ESuserArray[i].img + "' alt='Avatar' class='img-responsive'/><br></div>");	
}

$("body").append("</div></div>");


$(".avatar-name").click("click", function(){viewStatPage(this.id)});

