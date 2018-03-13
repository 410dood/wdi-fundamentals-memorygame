var board = document.getElementById('game-board');


var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var createBoard = function() {
for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards);
	board.appendChild(cardElement);
	}
};


var isTwoCards = function(){
	if (this.getAttribute('data-card') === 'king') {
	this.innerHTML = '<img src="King.png" class = "myImgClass" alt="King" />';	
} else {
	this.innerHTML = '<img src="Queen.png" class = "myImgClass" alt="Queen" />';
}
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
	}
};

var isMatch = function() {
if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert('Sorry, try again.');
	cardElement.className = "";
} else {
	alert('You found a match!')
};
  cardsInPlay = [];


}

createBoard();
