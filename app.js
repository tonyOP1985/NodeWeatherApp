
const yargs = require("yargs");

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

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

geocode.geocodeAddress(argv.address, (errorMesseage, results) => {
  if (errorMesseage) {
    console.log(errorMesseage);
  }
  else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMesseage, weatherResults) => {
      if (errorMesseage) {
        console.log(errorMesseage);
      }
      else {
        console.log(`It's currently ${weatherResults.temperature} and ${weatherResults.summary}.  It feels like ${weatherResults.apparentTemperature}`);
      }
    });
  }
});
