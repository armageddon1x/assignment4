//document ready

$(function(){
	//start

	//finding selectors
	console.log("logo: ");
	console.log($(".container img"));
	console.log("navigation: ");
	console.log($("nav"));
	console.log("titles for paragraphs: ");
	console.log($("h1"));
	console.log("anvil: ");
	console.log($("main img"));

	//change "HOME" to "Google"
	$("nav ul li:first-child a").html("Google");

	//change "HOME" link to google.com
	$("nav ul li:first-child a").attr("href","http://google.com");

	//end
})