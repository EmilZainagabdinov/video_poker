import React from 'react';
import Card from './components/Card/Card';
import CardDeck from "./CardDeck";
import PokerHand from "./PokerHand";
import './App.css';
import './card.css';

class App extends React.Component {
  state = {
    cardsOnHand: [],
    hand: '',
  };

  getNewCards = async () => {
    await this.setState({
      cardsOnHand: new CardDeck().getCards(5)
    })
    this.setState({
      hand: new PokerHand(this.state.cardsOnHand).getOutcome()
    })
  };

  render() {
    return (
        <div className="App">
          <button className="cardButton" onClick={this.getNewCards}>Get cards</button>
          <Card cards={this.state.cardsOnHand} />
          <h4 className="pokerHand">{this.state.hand}</h4>
        </div>
    );
  }
}

export default App;
