/*
this code for search top film in kinopoisk. Open "kino premiere" blank, than open console and download all film. For that, input
first block, witch will make scroll to down every 4 second during in 2 minut; After that serch film with raitin more 7.5;

*/

//Start first
var timeId = setInterval(function(){
	window.scrollBy(0, 4000);
}, 4000)
setTimeout(function(){
clearTimeout(timeId)
}, 120000);

//Start end
var film = document.querySelectorAll(".premier_item");
var size = film.length;
for (var i = 0; i < size; i++) {
	var rating = parseFloat(film[i].querySelector(".ajax_rating u").innerText)
	if(rating > 7.5){
		console.log(film[i].querySelectorAll('.name')[0].innerText)
	}
}
