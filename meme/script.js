    function textChangeListener (evt) {
      var id = evt.target.id;
      var text = evt.target.value;
      
      if (id == "topLineText") {
        window.topLineText = text;
      } else if (id == "fontSizeText")  {
		fontSize = text;	  
	  } else {
        window.bottomLineText = text;
      }
      
      redrawMeme(window.imageSrc, window.topLineText, window.bottomLineText);
    }
    
    function redrawMeme(image, topLine, bottomLine) {
		
      // Get Canvas2DContext
      var canvas = document.querySelector('canvas');
      var ctx = canvas.getContext("2d");
	  var thisFontSize = 40;
		if (fontSize != null && fontSize != undefined && fontSize > 7) {
		thisFontSize = fontSize;
	}

	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  if (image != null)
	  {
		ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
	  }
	  
	  ctx.textAlign = "center";
	  ctx.font = thisFontSize + "px Impact";
	  ctx.strokeStyle = "black";
	  ctx.fillStyle = "white";

	  if (topLine != null)
	  {
		ctx.fillText(topLineText, canvas.width * 0.5, 50);
		ctx.strokeText(topLineText, canvas.width * 0.5, 50);
	  }
	  if (bottomLine != null)
	  {
        ctx.fillText(bottomLine, canvas.width * 0.5, canvas.height - 30);
        ctx.strokeText(bottomLine, canvas.width * 0.5, canvas.height - 30);
	  }
    }
    function saveFile() {
      window.open(document.querySelector('canvas').toDataURL());
    }
    
    function handleFileSelect(evt) {
      var canvasWidth = 500;
      var canvasHeight = 500;
      var file = evt.target.files[0];
      
      
      
      var reader = new FileReader();
      reader.onload = function(fileObject) {
        var data = fileObject.target.result;
        
        // Create an image object
        var image = new Image();
        image.onload = function() {
          
          window.imageSrc = this;
          redrawMeme(window.imageSrc, null, null);
        }
        
        // Set image data to background image.
        image.src = data;
        console.log(fileObject.target.result);
      };
      reader.readAsDataURL(file)
    }
    
    window.topLineText = "";
    window.bottomLineText = "";
	
	var fontSize = document.getElementById('fontSizeText');
    var input1 = document.getElementById('topLineText');
    var input2 = document.getElementById('bottomLineText');
	
	input1.oninput = textChangeListener;
	input2.oninput = textChangeListener;
	fontSize.oninput = textChangeListener;
	
    document.getElementById('file').addEventListener('change', handleFileSelect, false);
    document.querySelector('button').addEventListener('click', saveFile, false);