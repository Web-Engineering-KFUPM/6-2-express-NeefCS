import { getRandomInt } from "./utils/random.js";

const quotes = [
  "Code is like humor. When you have to explain it, it’s bad.",
  "Before software can be reusable it first has to be usable.",
  "Make it work, make it right, make it fast.",
  "Programming isn’t about what you know; it’s about what you can figure out."
];

// ===============================================================
// TODO 3: Export a Function to Get a Random Quote
// ===============================================================
// Goal: Export a helper function named getRandomQuote() that returns one random quote from the array.

export function getRandomQuote() {
  const index = getRandomInt(quotes.length); // pick random index
  return quotes[index]; // return random quote
}
