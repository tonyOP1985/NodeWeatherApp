const request = require("request");

var getWeather = (lat, lng, callback) => {
  var address = lat + "," + lng;

  request({
    url: `https://api.darksky.net/forecast/eac25f3d3f4fdd8401944180915a2d6e/${address}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io server.');
    }
    else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    }
    else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
        summary: body.currently.summary
      });
    }
  });
};

module.exports.getWeather = getWeather;
