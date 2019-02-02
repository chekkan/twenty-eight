import React from "react";
import styled from "@emotion/styled";
import { Card } from "./Card";

export const Deck = styled(({ cards, className }) => (
  <div className={className}>
    <div>Deck</div>
    {cards.map(({ face, suit }) => (
      <Card key={`${face}.${suit}`} face={face} suit={suit} className="card" />
    ))}
  </div>
))`
  overflow: auto;
  height: 182px;
  .card {
    float: left;
  }
`;
