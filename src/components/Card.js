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
    return { __html: symbols[suit] };
  };
  return (
    <div className={`${className} ${suit}`}>
      <div className="card-face" style={{}}>
        {face}
        <div
          dangerouslySetInnerHTML={symbolFor(suit)}
          style={{ position: "relative", top: "-6px" }}
        />
      </div>
      <span
        className="card-suit--large"
        dangerouslySetInnerHTML={symbolFor(suit)}
      />
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
  position: relative;
  &.heart,
  &.diamond {
    color: red;
  }
  &.spade,
  &.club {
    color: black;
  }
  .card-face {
    font-size: 1.7em;
    font-weight: bold;
    position: absolute;
    top: 0;
    left: 6px;
    text-align: center;
  }
  .card-suit--large {
    position: absolute;
    top: 30%;
    left: 25%;
    font-size: 5em;
    display: block;
    text-align: center;
  }
`;
