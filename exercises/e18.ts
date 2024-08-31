// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { TAsteroid } from "../data/data";

export function getGreatestDiscoveryYear(asteroids: TAsteroid[]) {
  const frequencyMap = new Map();
  asteroids.map((asteroid) =>
    frequencyMap.set(
      asteroid.discoveryYear,
      frequencyMap.get(asteroid.discoveryYear) + 1 || 1
    )
  );

  return Array.from(frequencyMap).sort((a, b) => b[1] - a[1])[0]?.[0];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
