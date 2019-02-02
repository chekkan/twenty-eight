import React from "react";
import styled from "@emotion/styled/macro";
import { Card } from "./Card";

export const Hand = styled(({ cards, className }) => {
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
  overflow: auto;
  height: 182px;
  .card {
    float: left;
  }
  .card:not(:first-of-type) {
    margin-left: -48px;
  }
`;
