const csvSync = require("csv-parse/sync");
const fs = require("fs");

function readCSV() {
  const input = fs.readFileSync("src/site/_data/books.csv");
  const records = csvSync.parse(input, {
    columns: true,
    skip_empty_lines: true,
  });
  return records;
}

module.exports = function () {
  const data = readCSV();
  return data;
};