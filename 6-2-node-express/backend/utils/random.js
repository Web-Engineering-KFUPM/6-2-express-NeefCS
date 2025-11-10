// ===============================================================
// TODO 2: Create a function that returns a random integer
// ===============================================================
// Goal: Write a function named getRandomInt(max) that returns a random integer between 0 and (max - 1).
// Hints:
// - Use Math.random()
// - Multiply by max
// - Use Math.floor()
// - Export the function

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
