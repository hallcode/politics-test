const C = "collectivism";
const I = "individualism";
const P = "progressive";
const T = "traditional";

const QUESTIONS = [
  {
    _id: "A1",
    text: "A child's parents are best placed to decide what it should be taught, not the community.",
    score: [T, I],
  },
  {
    _id: "A2",
    text: "Society should look after everyone, even if it means providing basic life services (food, housing etc) to people who refuse to participate in the community or economy.",
    score: [C, P],
  },
  {
    _id: "A3",
    text: "This question is another one hi.",
    score: [C, P],
  },
];

export default QUESTIONS;

export { C, I, P, T };
