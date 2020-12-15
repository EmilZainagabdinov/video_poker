class PokerHand {
  constructor(cards) {
    this.playerCards = cards;
    this.possibleHands = {
      royalFlush: {name: 'Royal flush', state: false},
      straightFlush: {name: 'Straight flush', state: false},
      fourOfAKind: {name: 'Four of a kind', state: false},
      fullHouse: {name: 'Full house', state: false},
      flush: {name: 'Flush', state: false},
      straight: {name: 'Straight', state: false},
      threeOfAKind: {name: 'Three of a kind', state: false},
      twoPairs: {name: 'Two pairs', state: false},
      pair: {name: 'Pair', state: false}
    }
  };

  getOutcome = () => {
    const hand = this.playerCards;
    const handSuits = {
      diams: 0,
      hearts: 0,
      clubs: 0,
      spades: 0
    };
    const handRanks = {
      ranka: 0,
      rank2: 0,
      rank3: 0,
      rank4: 0,
      rank5: 0,
      rank6: 0,
      rank7: 0,
      rank8: 0,
      rank9: 0,
      rank10: 0,
      rankj: 0,
      rankq: 0,
      rankk: 0,
      rankaHigh: 0
    }

    for (let i = 0; i < hand.length; i++) {
      for (let key in handSuits) {
        if (key === hand[i].suit) {
          handSuits[key]++;
        }
      }

      for (let key in handRanks) {
        if (key === 'rank' + hand[i].rank) {
          handRanks[key]++;
        }
        handRanks.rankaHigh = handRanks.ranka;
      }
    }

    // hand check start
    let rankCounter = 0;
    let straightCounter = 0;
    let handResult = 'Nothing';
    let topStraight = false;

    for (let key in handRanks) {
      rankCounter++;

      if (handRanks[key] === 1) {
        straightCounter++;

        if (straightCounter === 5 && rankCounter === 14) {
          this.possibleHands.straight.state = true;
          topStraight = true;
        } else if (straightCounter === 5) {
          this.possibleHands.straight.state = true;
        }
      } else {
        straightCounter = 0;
      }

      if (handRanks[key] === 2) {
        if (key === 'ranka') {
          handRanks.rankaHigh = 0;
        }
        if (this.possibleHands.pair.state === true) {
          this.possibleHands.twoPairs.state = true;
        } else if (this.possibleHands.threeOfAKind.state === true) {
          this.possibleHands.fullHouse.state = true;
        } else {
          this.possibleHands.pair.state = true;
        }
      }

      if (handRanks[key] === 3) {
        if (this.possibleHands.pair.state === true) {
          this.possibleHands.fullHouse.state = true;
        } else {
          this.possibleHands.threeOfAKind.state = true;
        }
      }

      if (handRanks[key] === 4) {
        this.possibleHands.fourOfAKind.state = true;
      }
    }

    for (let key in handSuits) {
      if (handSuits[key] === 5) {
        if (this.possibleHands.straight.state === true && topStraight === true) {
          this.possibleHands.royalFlush.state = true;
        } else if (this.possibleHands.straight.state === true) {
          this.possibleHands.straightFlush.state = true;
        } else {
          this.possibleHands.flush.state = true;
        }
      }
    }
    // hand check end

    for (let key in this.possibleHands) {
      if (this.possibleHands[key].state === true) {
        handResult = 'You\'ve got: ' + this.possibleHands[key].name;
        break;
      }
    }

    return handResult;
  };
}

export default PokerHand;