function printToConsole(facts) {
  console.log("\nUseless Facts:");
  console.log(JSON.stringify(facts, null, 2));
}

module.exports = { printToConsole };
