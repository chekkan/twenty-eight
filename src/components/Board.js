import React from "react";
import styled from "@emotion/styled/macro";
import { Hand } from "./Hand";
import { Deck } from "./Deck";
import { shuffle } from "../lib/shuffle";

class UnStyledBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: this.props.deck,
      hands: [[], [], [], []]
    };
  }
  shuffle = () => {
    this.setState(({ deck }) => ({ deck: shuffle([...deck]) }));
  };
  deal = () => {
    let index = 0;
    const hands = [[], [], [], []];
    this.state.deck.forEach(card => {
      hands[index].push(card);
      index = index < 3 ? index + 1 : 0;
    });
    this.setState({ hands, deck: [] });
  };
  render() {
    return (
      <>
        <div>
          <button onClick={this.shuffle}>Shuffle</button>
          <button onClick={this.deal}>Deal</button>
        </div>
        <Deck cards={this.state.deck} />
        {this.state.hands.map((hand, index) => (
          <React.Fragment key={index}>
            <div>Player {index + 1}</div>
            <Hand cards={hand} />
          </React.Fragment>
        ))}
      </>
    );
  }
}

export const Board = styled(UnStyledBoard)`
  button {
    padding: 1em;
  }
`;
