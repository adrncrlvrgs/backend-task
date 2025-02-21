const yargs = require("yargs");

function parseCommandLine(argv) {
  return yargs(argv)
    .option("n", {
      alias: "number",
      type: "number",
      describe: "Number of facts to fetch",
      required: true,
    })
    .option("f", {
      alias: "format",
      type: "string",
      description: "Output format (json/csv/console)",
      required: true,
    }).argv;
}

module.exports = {
  parseCommandLine,
};
