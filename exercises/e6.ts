// SPACE DATA EXERCISE 6

import { TAsteroid } from "../data/data";

// Return an array with all asteroids discovered after a given year
export function getAsteroidsDiscoveredAfterYear(
  asteroids: TAsteroid[],
  year: number
) {
  return asteroids.filter(
    (asteroid: TAsteroid) => asteroid.discoveryYear > year
  );
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
