/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

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
  border-radius: 13px;
  border-width: 0;
  background-color: white;
  background-image: url("images/card-back-red.png");
  background-size: cover;
  background-position: center center;
`;

const mappings = ["diamond", "heart", "spade", "club"]
  .map(suit => [
    { suit, num: "A", str: "ace" },
    { suit, num: "K", str: "king" },
    { suit, num: "Q", str: "queen" },
    { suit, num: "J", str: "jack" },
    { suit, num: "10", str: "ten" },
    { suit, num: "9", str: "nine" },
    { suit, num: "8", str: "eight" },
    { suit, num: "7", str: "seven" },
    { suit, num: "6", str: "six" },
    { suit, num: "5", str: "five" },
    { suit, num: "4", str: "four" },
    { suit, num: "3", str: "three" },
    { suit, num: "2", str: "two" }
  ])
  .reduce((acc, val) => acc.concat(val), []);

export const Card = styled(({ face, suit, hidden = true, className }) => {
  return hidden ? (
    <HiddenCard />
  ) : (
    <div className={`${className} card-face-${face} card-suit-${suit}`}></div>
  );
})`
  ${card};
  padding: 0.5em;
  position: relative;
  background-size: cover;
  backgroun-position: center;
  ${mappings
    .map(
      a => `&.card-suit-${a.suit}.card-face-${a.num} {
    background-image: url("images/card-${a.suit}-${a.str}.png");
  }`
    )
    .join("\n")}
`;
