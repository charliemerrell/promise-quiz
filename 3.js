const fetch = require('node-fetch');

console.log('hello');
fetch('https://www.multiverse.io/en-GB').then(console.log);
console.log('goodbye');

