import { C, I, P, T } from "./questions";

export default function calculateResults(responses) {
  let ci = 0;
  let tp = 0;
  let ci_desc = "";
  let tp_desc = "";

  responses.forEach((response) => {
    if (response.score.includes(C) && response.response > 0) --ci;
    if (response.score.includes(I) && response.response > 0) ++ci;

    if (response.score.includes(P) && response.response > 0) --tp;
    if (response.score.includes(T) && response.response > 0) ++tp;
  });

  const test_length = responses.length;
  let ci_percent = ci / test_length;
  let tp_percent = tp / test_length;

  return {
    ci: ci_percent,
    tp: tp_percent,
  };
}
