import React from "react";
import styled from "@emotion/styled/macro";
import { Card } from "./Card";

export const Hand = styled(({ cards, className }) => {
  return (
    <div className={className}>
      {cards.map(({ face, suit }) => (
        <div className="card-container" key={`${face}.${suit}`}>
          <Card face={face} suit={suit} className="card" />
        </div>
      ))}
    </div>
  );
})`
  //   overflow: auto;
  height: 182px;
  display: flex;
  flex-direction: row;
  //   align-content: stretch;
  .card-container {
    width: calc(100% / 8 - 6px);
    max-width: 90px;
  }
  .card {
  }
`;
