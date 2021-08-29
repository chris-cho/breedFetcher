const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error || body[1] === ']') callback(error);
    else return callback(error, JSON.parse(body)[0].description);
  });
};

module.exports = { fetchBreedDescription };