var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamond.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
cardsInPlay.push(cards[cardID].rank)
var checkForMatch = function (cardID) {
if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}

var flipCard = function (cardId) {
	checkForMatch();
	console.log("User flipped" + cards[cardID].rank);
//	cardsInPlay.push(cardId = 

//		console.log("User flipped" + cards[cardId]);
};

flipCard(0);
flipCard(2);

console.log(cardsInPlay.cardImage);
console.log(cardsInPlay.suit);

/*	
if (cardsInPlay.legnth !== 2) {
	(console.log(cardsInPlay.legnth));
} else if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
} else {
	alert("Sorry, try again");
}

 
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
console.log("User flipped " + cardsInPlay);
console.log(cardsInPlay);


else if (cardsInPlay[0] !== cardsInPlay[1]) {

var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[1];
cardsInPlay.push(cardTwo); 



var flipped = cards[0, 1];	
	for (var i = 0; i < cards.length; i += 1) {
console.log("Hello " + cards[i]);
}
	console.log("User flipped a" + " " + cards(i));
	var c = cards[0];
cardsInPlay.push("flipped");
*/