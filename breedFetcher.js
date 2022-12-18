const request = require('request');
const args = process.argv.slice(2);
const breed = args[0];

request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {

  if (error) {
    throw error;
  }

  console.log('Status: ', response.statusCode);

  const data = JSON.parse(body);

  // Check if breed data recieved
  if (data.length === 0) {
    console.log("Breed not found!");
  } else {
    console.log(data[0]["description"]);
  }

});