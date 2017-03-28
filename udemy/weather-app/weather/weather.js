// api key f6cb8229b9fbb986fcf86130447e4720
// https://api.darksky.net/forecast/f6cb8229b9fbb986fcf86130447e4720/37.4183483,-79.2532153

const request = require('request');

var getWeather = (lat, lng, callback) => {

  request({
    url: `https://api.darksky.net/forecast/f6cb8229b9fbb986fcf86130447e4720/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to api')
    } else if (response.statusCode === 404) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {

      // the first argument is undefined because there is no error message,
      // the second argument, response, is an object
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
