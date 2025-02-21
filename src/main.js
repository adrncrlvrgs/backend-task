const { fetchRandomFacts } = require("./dataFetcher");
const { saveToJson } = require("./data-exporters/jsonExporter");
const { saveToCsv } = require("./data-exporters/csvExporter");
const { printToConsole } = require("./data-exporters/consoleExporter");
const { parseCommandLine } = require("./commandLineParser");

async function main() {
  try {
    const argv = parseCommandLine(process.argv.slice(2));
    const data = await fetchRandomFacts(argv.n);

    switch (argv.f) {
      case "json":
        await saveToJson(data);
        break;
      case "csv":
        await saveToCsv(data);
        break;
      case "console":
        printToConsole(data);
        break;
      default:
        console.error("Invalid format specified");
        process.exit(1);
    }
  } catch (error) {
    console.error("An error occurred:", error.message);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("An error occurred in main:", error.message);
  process.exit(1);
});
