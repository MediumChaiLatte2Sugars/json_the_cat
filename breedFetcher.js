const request = require('request');
const arguments = process.argv.slice(2);
const breed = arguments[0];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
  
if (error){
  throw error;
}
  const data = JSON.parse(body);
  console.log(body);
  console.log(typeof body);

  console.log(data[0]["description"]);
});