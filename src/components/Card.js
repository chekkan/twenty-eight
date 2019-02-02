import React from "react";
import styled from "@emotion/styled";

export const Card = styled(({ face, suit, className }) => {
  const symbolFor = suit => {
    const symbols = {
      spade: "&spades;",
      diamond: "&diams;",
      club: "&clubs;",
      heart: "&hearts;"
    };
    return React.createElement("span", {
      dangerouslySetInnerHTML: { __html: symbols[suit] },
      style: {
        fontSize: "5em",
        display: "block",
        textAlign: "center"
      }
    });
  };
  return (
    <div className={`${className} ${suit}`}>
      <span
        style={{ display: "block", fontSize: " 1.7em", fontWeight: "bold" }}
      >
        {face}
      </span>
      {symbolFor(suit)}
    </div>
  );
})`
  width: calc(64px * 2);
  height: calc(89px * 2);
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 2px;
  padding: 0.5em;
  box-sizing: border-box;
  background-color: ghostwhite;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
  &.heart,
  &.diamond {
    color: red;
  }
  &.spade,
  &.club {
    color: black;
  }
`;
