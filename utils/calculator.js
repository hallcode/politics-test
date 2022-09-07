import { C, I, P, T } from "./questions";

const POSITIONS = [
  [[0, 0], "True centrist", "gray"],
  [[-1, -1], "Modern Communist", "pink"],
  [[1, 1], "Right-wing conservative", "grape"],
  [[-1, 1], "Traditional hard-leftist", "red"],
  [[-1, 0], "Communist", "red"],
  [[1, 0], "Libertarian", "cyan"],
  [[0, 1], "Traditionalist", "blue"],
  [[0, -1], "Centrist", "yellow"],
  [[-0.1, 0], "Lefty centrist", "orange"],
  [[0.1, 0], "Right of centre conservative", "blue"],
  [[0.5, 0.5], "Conservative", "blue"],
  [[0.5, -0.5], "Liberal conservative", "indigo"],
  [[1, -1], "Neo-liberal conservative", "violet"],
  [[-0.66, 0], "Socialist", "red"],
];

export default function calculateResults(responses) {
  let categories = {};
  let ci_desc = "";
  let tp_desc = "";

  responses.forEach((response) => {
    if (response.response > 0) {
      if (!Array.isArray(categories[response.score])) {
        categories[response.score] = [];
      }

      categories[response.score].push(response._id);
    }
  });

  let results = { [C]: 0, [I]: 0, [P]: 0, [T]: 0 };
  let ci_total = 0;
  let tp_total = 0;
  let cats = Object.keys(categories);
  cats.forEach((key) => {
    // Calculate the total number of questions for the main axes
    if (key == I || key == C) ci_total = ci_total + categories[key].length;
    if (key == T || key == P) tp_total = tp_total + categories[key].length;

    // Add up each category
    results[key] = categories[key].length;
  });

  let ci_percent = (results[I] - results[C]) / ci_total;
  let tp_percent = (results[T] - results[P]) / tp_total;

  return {
    ci: ci_percent,
    tp: tp_percent,
  };
}

function distance(a, b) {
  return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
}

export function getDescription({ ci, tp }) {
  let pos = [ci, tp];

  let positions = POSITIONS;

  positions.sort((a, b) => {
    let a_dist = distance(a[0], pos);
    let b_dist = distance(b[0], pos);
    return a_dist - b_dist;
  });

  console.log(positions);

  return positions[0][1];
}

export function getColour({ ci, tp }) {
  let pos = [ci, tp];

  let positions = POSITIONS;

  positions.sort((a, b) => {
    let a_dist = distance(a[0], pos);
    let b_dist = distance(b[0], pos);
    return a_dist - b_dist;
  });

  console.log(positions);

  return positions[0][2];
}
