const fetch = require("node-fetch");

async function whatever() {
  const response = await fetch("https://www.multiverse.io/en-GB");
  console.log(response);
}

whatever();
