const request = require('request');
const arguments = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=Siberian', (error, response, body) => {
  
  const data = JSON.parse(body);
  console.log(body);
  console.log(typeof body);

  console.log(data[0]["description"]);
});