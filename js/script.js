//For Exceeding EXPECTATIONS

var button = document.getElementById("loadQuote");
var showQuotes = document.querySelector(".quote");
var showAuthor = document.querySelector(".source");
var showCitation = document.querySelector(".citation");
var showYear = document.querySelector(".year");
var divsel = document.getElementById("quote-box");
var body = document.querySelector("body");

//Stating of Facts,Citation,Author and color.
var quotes = [
			{
			quote:"When love is at its best, one loves so much that he cannot forget.",
			source: "Helen Hunt Jackson",
			citation: "Love Quote of the day",
			year: 2017,
			color:"#f45c41"
			},
			{
			quote:"Life is short and you've got to get the most out of it.",
			source: "Orhan Pamuk",
			citation: "Motivational Quotes",
			year: 2017,
			color:"#4367f9"
			},
			{
			quote:"Life is too short for long-term grudges",
			source: "Elon Musk",
			citation: "Inspirational Quotes",
			year: 1992,
			color:"#43f9e0"
			},
			{
			quote:"You can do anything but not everything",
			source: "David Allen",
			citation: "Making It All Work",
			year: 2009,
			color:"#36b55c"	
				},
				{
			quote:"Be yourself,everyone else is already taken.",
			source: "Oscar Wilde",
			citation: "Book",
			year: 2005,
			color:"#095cf7"	
				},
			{
			quote:"To infinity and beyond.",
			source: "Buzz LightYear",
			citation: "The toy Story",
			year: 2006,
			color:"#f94358"
			},
			{
			quote:"All for one and one for all, united we stand divided we fall.",
			source: "Alexandre Dumas",
			citation: "Patriotism",
			year: 2015,
			color:"#db09f7"
			}
			
			];

//Generating Non-Repeatitive RandomNumber
function getRandomQuote(randomNumber){
	var i = quotes.length;
	var randomNumber1 = 0;
	var temp;
	
	while(i--){
		randomNumber1=Math.floor(Math.random() * (i));
	temp = quotes[i];
	quotes[i] = quotes[randomNumber1];
	quotes[randomNumber1] = temp;
}
return randomNumber1;
}
//Printing the RandomNumbers
function printQuote(){
	//Calling of getRandomQuote and storing the Random function to a variable
	var rand =getRandomQuote(quotes);
	//Changing of Quote
	showQuotes.textContent = quotes[rand].quote;
	//Loging the quote for Non-repeatitive Verification
	console.log(quotes[rand].quote);
	//Separating the parent text from the child spams.. 
	showAuthor.parentNode.childNodes[3].firstChild.textContent = quotes[rand].source;
	//selection of First child  
	showAuthor.children[0].textContent = quotes[rand].citation;
	//Selection of second Child
	showAuthor.children[1].textContent = quotes[rand].year;
	//Changing the background as the facts changes
	body.style.background = quotes[rand].color;
	//Changing the colour of the button to match the colour of background
	button.style.background = quotes[rand].color;

}
//Setting a time Interval for 30 Seconds for Automatic transition of Quotes 
setInterval(printQuote,30000);
 //Setting event listener to fire the action when the button is clicked
button.addEventListener("click",function(){
	printQuote();
});










