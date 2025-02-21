const fs = require("fs");

async function saveToJson(facts, filename = "useless_facts.json") {
  try {
    const data = JSON.stringify(facts, null, 2);
    await new Promise((resolve, reject) => {
      fs.writeFile(filename, data, "utf8", (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
    console.log(`Data saved to ${filename}`);
  } catch (error) {
    console.error("Error saving JSON:", error.message);
    throw error;
  }
}

module.exports = { saveToJson };
