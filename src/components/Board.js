import React from "react";
import styled from "@emotion/styled/macro";
import { Card } from "./Card";

const Hand = styled(({ cards, className }) => {
  return (
    <div className={className}>
      {cards.map(({ face, suit }) => (
        <Card
          key={`${face}.${suit}`}
          face={face}
          suit={suit}
          className="card"
        />
      ))}
    </div>
  );
})`
  clear: both;
  .card:not(:first-child) {
    margin-left: -48px;
  }
`;

const Board = ({ deck }) => {
  const hands = [[], [], [], []];
  let index = 0;
  deck.forEach(card => {
    hands[index].push(card);
    index = index < 3 ? index + 1 : 0;
  });
  return hands.map((hand, index) => <Hand key={index} cards={hand} />);
};

export default Board;
