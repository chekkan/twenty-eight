/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const symbolFor = suit => {
  const symbols = {
    spade: "&spades;",
    diamond: "&diams;",
    club: "&clubs;",
    heart: "&hearts;"
  };
  return { __html: symbols[suit] };
};

const card = css`
  width: calc(64px * 2);
  height: calc(89px * 2);
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 2px;
  background-color: ghostwhite;
  box-sizing: border-box;
  box-shadow: 3px 3px 7px 3px rgba(0, 0, 0, 0.3);
`;

const HiddenCard = styled.div`
  ${card};
  border: 8px solid white;
  background-color: white;
  background-image: radial-gradient(midnightblue 9px, transparent 10px),
    repeating-radial-gradient(
      midnightblue 0,
      midnightblue 4px,
      transparent 5px,
      transparent 20px,
      midnightblue 21px,
      midnightblue 25px,
      transparent 26px,
      transparent 50px
    );
  background-size: 30px 30px, 90px 90px;
  background-position: 0 0;
`;

export const Card = styled(({ face, suit, hidden = false, className }) => {
  return hidden ? (
    <HiddenCard />
  ) : (
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
  ${card};
  padding: 0.5em;
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
