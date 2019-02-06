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
  componentDidMount() {
    this.shuffle(this.deal);
  }
  shuffle = cb => {
    this.setState(({ deck }) => ({ deck: shuffle([...deck]) }), cb);
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
      <div className={this.props.className}>
        <Deck cards={this.state.deck} />
        {this.state.hands.map((hand, index) => {
          const hidden = index !== 0;
          return (
            <React.Fragment key={index}>
              <div>Player {index + 1}</div>
              <Hand cards={hand} hidden={hidden} />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export const Board = styled(UnStyledBoard)``;
