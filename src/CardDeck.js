class CardDeck {
  constructor() {
    this.suit = ['diams', 'hearts', 'clubs', 'spades'];
    this.rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k', 'a'];
    this.cardDeck = [];

    for (let s = 0; s < this.suit.length; s++) {
      for (let r = 0; r < this.rank.length; r++) {
        this.cardDeck.push({suit: this.suit[s], rank: this.rank[r]});
      }
    }
  };

  getCard = () => {
    const cardPickIndex = Math.floor(Math.random() * this.cardDeck.length);
    const cardForPlayer = this.cardDeck[cardPickIndex];

    this.cardDeck.splice(cardPickIndex, 1);

    return cardForPlayer;
  };

  getCards = qty => {
    const cardsForPlayer = [];

    for (let i = 1; i <= qty; i++) {
      cardsForPlayer.push(this.getCard());
    }

    return cardsForPlayer;
  };
}

export default CardDeck;