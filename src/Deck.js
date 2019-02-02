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

const Deck = ({ cards }) =>
  cards.map(({ face, suit }) => (
    <Card key={`${face}.${suit}`} face={face} suit={suit} />
  ));

export default Deck;
