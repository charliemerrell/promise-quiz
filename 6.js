const { readFile } = require("fs/promises");

async function readAnimal() {
    const response = await readFile("./animal.txt", { encoding: "utf-8" });
    return response;
}

readAnimal().then(console.log);
