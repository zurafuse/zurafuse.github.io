var keysUp = [];
var keysDown = [];


var updateControls = function(e){
	if (e[37] == true)
	{
		dir.left = true;
		dir.lead = "left";
	}
	else
	{
		dir.left = false;
	}
	if (e[39] == true)
	{
		dir.right = true;
		dir.lead = "right";
	}
	else
	{
		dir.right = false;
	}
	if (e[40] == true)
	{
		dir.down = true;
		dir.lead = "down";
	}
	else
	{
		dir.down = false;
	}
	if (e[38] == true)
	{
		dir.up = true;
		dir.lead = "up";
	}
	else
	{
		dir.up = false;
	}
	if (e[32] == true)
	{
		dir.fire = true;
	}
	else
	{
		dir.fire = false;
	}
};