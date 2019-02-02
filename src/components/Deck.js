import React from "react";
import { Card } from "./Card";

const Deck = ({ cards }) =>
  cards.map(({ face, suit }) => (
    <Card key={`${face}.${suit}`} face={face} suit={suit} />
  ));

export default Deck;
