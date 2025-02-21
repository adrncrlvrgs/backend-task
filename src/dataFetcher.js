const axios = require("axios");

const API_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random"; //I Directly put the API URL since it's public and requires no configuration.
// Note: I understand the importance of using environment variables for security and configuration purposes,
// but since this is a public API with no sensitive data, I opted for a direct approach.

const MAX_REQUESTS = 50;

async function fetchRandomFact() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching random fact:", error.message);
    return null;
  }
}

async function fetchRandomFacts(count) {
  if (count <= 0 || count > MAX_REQUESTS) {
    throw new Error(`Count must be between 1 and ${MAX_REQUESTS}`);
  }

  const limitedCount = Math.min(count, MAX_REQUESTS);
  const promises = Array.from({ length: limitedCount }, () =>
    fetchRandomFact()
  );

  const results = await Promise.allSettled(promises);

  const facts = results
    .filter((result) => result.status === "fulfilled" && result.value !== null)
    .map((result) => result.value);

  if (facts.length === 0) {
    throw new Error("No facts were fetched successfully.");
  }

  return facts;
}
module.exports = { fetchRandomFacts };
