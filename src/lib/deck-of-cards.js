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

export const standardDeck = suits.reduce((accum, suit) => {
  return [...accum, ...faces.map(face => ({ face, suit }))];
}, []);

export const thirtyTwoDeck = standardDeck.filter(card => {
  return (
    card.face === "A" ||
    card.face === "K" ||
    card.face === "Q" ||
    card.face === "J" ||
    card.face === "10" ||
    card.face >= "7"
  );
});
