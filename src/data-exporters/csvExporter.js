const { createObjectCsvWriter } = require("csv-writer");

async function saveToCsv(facts, filename = "useless_facts.csv") {
  try {
    const csvWriter = createObjectCsvWriter({
      path: filename,
      header: [
        { id: "id", title: "ID" },
        { id: "text", title: "Fact" },
        { id: "source", title: "Source" },
        { id: "source_url", title: "Source URL" },
        { id: "language", title: "Language" },
        { id: "permalink", title: "Permalink" },
      ],
    });

    await csvWriter.writeRecords(facts);
    console.log(`Data saved to ${filename}`);
  } catch (error) {
    console.error("Error saving CSV:", error.message);
    throw error;
  }
}

module.exports = { saveToCsv };
