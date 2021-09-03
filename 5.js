const fetch = require('node-fetch');

async function fetchMultiverse() {
    const response = await fetch('https://www.multiverse.io/en-GB');
    return response;
}

const mvResponse = fetchMultiverse();
console.log(mvResponse);


