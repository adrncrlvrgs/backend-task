const axios = require("axios");

const API_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random"; //I Directly put the API URL since it's public and requires no configuration.
// Note: I understand the importance of using environment variables for security and configuration purposes,
// but since this is a public API with no sensitive data, I opted for a direct approach.

const MAX_REQUESTS = 50;
const CONCURRENCY_LIMIT = 10;

async function fetchRandomFact() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching random fact:", error.message);
    throw new Error(`Failed to fetch random fact: ${error.message}`);
  }
}

async function fetchRandomFacts(count) {
  if (count <= 0 || count > MAX_REQUESTS) {
    throw new Error(`Count must be between 1 and ${MAX_REQUESTS}`);
  }

  const limitedCount = Math.min(count, MAX_REQUESTS);
  const facts = [];
  const queue = [];

  for (let i = 0; i < limitedCount; i++) {
    const promise = fetchRandomFact()
      .then((fact) => {
        facts.push(fact);
      })
      .catch((error) => {
        console.error(`Error fetching fact ${i + 1}:`, error.message);
      });

    queue.push(promise);

    if (queue.length >= CONCURRENCY_LIMIT) {
      await Promise.race(queue);
      queue.splice(queue.indexOf(promise), 1);
    }
  }

  await Promise.all(queue);

  if (facts.length === 0) {
    throw new Error("No facts were fetched successfully.");
  }

  return facts;
}

module.exports = { fetchRandomFacts };
