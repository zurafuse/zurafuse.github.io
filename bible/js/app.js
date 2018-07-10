var book = "";
var bookChapter;

//Populate Bible menu with books.
for (i = 0; i < Torah.BOOKS.length; i++)
{
	$(".bible-menu").append("<option>" + Torah.BOOKS[i].bname + "</option>");
}

for (i = 0; i < Prophets.BOOKS.length; i++)
{
	$(".bible-menu").append("<option>" + Prophets.BOOKS[i].bname + "</option>");
}

$(".bible-menu").append("<option>Psalms</option>");

for (i = 0; i < Ketuvim.BOOKS.length; i++)
{
	$(".bible-menu").append("<option>" + Ketuvim.BOOKS[i].bname + "</option>");
}

for (i = 0; i < Gospel.BOOKS.length; i++)
{
	$(".bible-menu").append("<option>" + Gospel.BOOKS[i].bname + "</option>");
}

for (i = 0; i < NewTestament.BOOKS.length; i++)
{
	$(".bible-menu").append("<option>" + NewTestament.BOOKS[i].bname + "</option>");
}

//pass book to bible page when selected.
$(".bible-menu").change(function() {
    var query = $(this).val();
	if (query != "SELECT A BOOK")
	{
		window.location.href = "bible.html?" + query;
	}
});

function displayChapters(biblebook){
	$(".book-list").append("<h2>" + biblebook.bname + "</h2>");
	for (j = 0; j < biblebook.CHAPTER.length; j++)
	{
		$(".book-list").append("<li class='chapters'>CHAPTER " + biblebook.CHAPTER[j].cnumber + "</li>");
	}
}

function displayVerses(chapter){
	$(".book-list").append("<h2>CHAPTER " + chapter.cnumber + "</h2>");
	for (k = 0; k < chapter.VERS.length; k++)
	{
		$(".book-list").append("<li>" + chapter.VERS[k].vnumber + " " + chapter.VERS[k].text + "</li>");
	}
}

$( ".books-class" ).on("click", function() {
	window.location.href = "bible.html?" + $(this).text();
});

setTimout(function(){
	$(".books-class").off("click");
	$( ".books-class" ).on("click", function() {
		window.location.href = "bible.html?" + $(this).text();
	});
});

setTimout(function(){
	$(".books-class").off("click");
	$( ".books-class" ).on("click", function() {
		window.location.href = "bible.html?" + $(this).text();
	});
});

$( ".chapters" ).on("click", function() {
  var chaptVal = parseInt($(this).text().replace("CHAPTER ", "")) - 1;
  displayVerses(bookChapter.CHAPTER[chaptVal]);
});

setTimeout(function(){
	$(".chapters").off("click");
	$( ".chapters" ).on("click", function() {
	var chaptVal = parseInt($(this).text().replace("CHAPTER ", "")) - 1;
	displayVerses(bookChapter.CHAPTER[chaptVal]);
	});
}, 500);

setTimeout(function(){
	$(".chapters").off("click");
	$( ".chapters" ).on("click", function() {
	var chaptVal = parseInt($(this).text().replace("CHAPTER ", "")) - 1;
  	displayVerses(bookChapter.CHAPTER[chaptVal]);
	});
}, 1300);
