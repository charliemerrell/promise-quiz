const { readFile } = require("fs/promises");

readFile("./animal.txt", { encoding: "utf-8" }).then(console.log);
