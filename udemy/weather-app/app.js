const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

// this function returns the address, latitude, and longitude from Google
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    
    // console.log(JSON.stringify(results, undefined, 4));
    console.log(results.address);

    // this function returns the temperature from Dark Sky
    // lat, lng, callback
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        
        //// this works, but let's make the output prettier
        // console.log(JSON.stringify(weatherResults, undefined, 4))
        
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`)
      }
    });
  }
});
