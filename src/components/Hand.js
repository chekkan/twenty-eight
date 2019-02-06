import React from "react";
import styled from "@emotion/styled/macro";
import { Card } from "./Card";

export const Hand = styled(({ cards, hidden = true, className }) => {
  return (
    <div className={className}>
      {cards.map(({ face, suit }) => (
        <div className="card-container" key={`${face}.${suit}`}>
          <Card face={face} suit={suit} className="card" hidden={hidden} />
        </div>
      ))}
    </div>
  );
})`
  height: 182px;
  display: flex;
  flex-direction: row;
  .card-container {
    width: calc(100% / 8 - 8px);
    max-width: 90px;
  }
`;
