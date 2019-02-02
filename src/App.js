import React, { Component } from "react";
import "./App.css";
import styles from "./App.module.css";
import Deck from "./components/Deck";
import Board from "./components/Board";
import { thirtyTwoDeck } from "./lib/deck-of-cards";
import { shuffle } from "./lib/shuffle";

class App extends Component {
  state = {
    cards: thirtyTwoDeck
  };
  shuffle = () => {
    this.setState(({ cards }) => ({ cards: shuffle([...cards]) }));
  };
  render() {
    return (
      <>
        <div>
          <button
            className={styles.button}
            onClick={() => {
              this.shuffle();
            }}
          >
            Shuffle
          </button>
        </div>
        {/* <Deck cards={this.state.cards} /> */}
        <Board deck={this.state.cards} />
      </>
    );
  }
}

export default App;
