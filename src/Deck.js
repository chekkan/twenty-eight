import React from "react";

const Card = ({ face, suit }) => {
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
    <div
      style={{
        color: suit === "heart" || suit === "diamond" ? "red" : "black",
        width: "calc(64px * 2)",
        height: "calc(89px * 2)",
        border: "1px solid #000",
        borderRadius: "5px",
        float: "left",
        margin: "2px",
        padding: "1em",
        boxSizing: "border-box"
      }}
    >
      <span
        style={{ display: "block", fontSize: " 1.7em", fontWeight: "bold" }}
      >
        {face}
      </span>
      {symbolFor(suit)}
    </div>
  );
};

const Deck = () => {
  const faces = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suits = ["spade", "club", "heart", "diamond"];
  return suits
    .reduce((accum, suit) => {
      return [...accum, ...faces.map(face => ({ face, suit }))];
    }, [])
    .map(({ face, suit }) => {
      return <Card key={`${face}.${suit}`} face={face} suit={suit} />;
    });
};

export default Deck;
