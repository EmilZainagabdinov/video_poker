import React from 'react';

const Card = props => {
  const playerCards = [];

  if (props.cards.length === 0) {
    for (let i = 0; i < 5; i++) {

      playerCards[i] = (
          <div className='card card-back' key={`card-${i}`} />
      );
    }
  } else {
    for (let i = 0; i < props.cards.length; i++) {

      const cardClassName = `card card-rank-${props.cards[i].rank} card-${props.cards[i].suit}`;

      let cardRank = '';
      if (isNaN(props.cards[i].rank)) {
        cardRank = props.cards[i].rank.toUpperCase();
      } else {
        cardRank = props.cards[i].rank
      }

      let cardSuit = '';
      switch (props.cards[i].suit) {
        case 'diams':
          cardSuit = '♦';
          break;
        case 'hearts':
          cardSuit = '♥';
          break;
        case 'clubs':
          cardSuit = '♣';
          break;
        case 'spades':
          cardSuit = '♠';
          break;
        default:
          break;
      }

      playerCards[i] = (
          <div className={cardClassName} key={`card-${i}`}>
            <span className="card-rank">{cardRank}</span>
            <span className="card-suit">{cardSuit}</span>
          </div>
      );
    }
  }

  return (
      <div className="cardBlock">
        {playerCards}
      </div>
  );
};

export default Card;