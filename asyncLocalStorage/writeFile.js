const fs = require("fs");
const path = require("path");

fs.writeFile(
  path.join(__dirname, "data.txt"),
  "this is a useful string that i should store locally 0010",
  (err) => {
    if (err) throw err;
    console.log("data has been successfully stored locally");
  }
);
