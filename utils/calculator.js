import { C, I, P, T } from "./questions";

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

  let results = { C: 0, I: 0, P: 0, T: 0 };
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
