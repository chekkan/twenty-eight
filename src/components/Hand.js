import React from "react";
import styled from "@emotion/styled/macro";
import { Card } from "./Card";

export const Hand = styled(({ cards, hidden = true, className }) => {
  return (
    <div className={className}>
      <div className="hand-container">
        {cards.map(({ face, suit }) => (
          <div className="card-container" key={`${face}.${suit}`}>
            <Card face={face} suit={suit} className="card" hidden={hidden} />
          </div>
        ))}
      </div>
    </div>
  );
})`
  ${props =>
    props.position === "right" &&
    "transform: rotate(-90deg); transform-origin: 100% 100% 0; width: 35vh; position: absolute; right: 0; top: 5%;"}
  ${props => props.position === "top" && "transform: rotate (180deg);"}
  ${props =>
    props.position === "top" &&
    "position: absolute; top: 0; width: 50%; left: 25%;"}
  ${props => props.position === "bottom" && "position: absolute; bottom: 0;"}
  ${props =>
    props.position === "left" &&
    "transform: rotate(90deg); transform-origin: 0 100% 0;"}
  ${props =>
    props.position === "left" && "position: absolute; top: -5%; width: 35vh;"}
  height: 182px;
  ${props => props.position === "bottom" && "width: 100%; margin-left: -22px;"}
  .hand-container {
    display: flex;
    flex-direction: row;
    ${props => props.position === "bottom" && "justify-content: center;"}
  }
  .card-container {
    width: calc(100% / 8 - 8px);
    max-width: 70px;
  }
`;
