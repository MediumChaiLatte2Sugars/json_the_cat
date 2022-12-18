const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {

    if (error) {
      callback(error, null);
    }

    const data = JSON.parse(body);

    // Check if breed data recieved
    if (data.length === 0) {
      callback(new Error("Breed not found!", null));
    } else {
      callback(null, data[0]["description"]);
    }

  });
};

module.exports = { fetchBreedDescription };