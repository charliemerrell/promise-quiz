const fetch = require('node-fetch');

async function fetchAndPrint() {
    const response = await fetch('https://www.multiverse.io/en-GB');
    console.log(response);
}

console.log('hello');
fetchAndPrint();
console.log('goodbye');

