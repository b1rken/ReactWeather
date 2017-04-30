var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=5d168799bed69b9dedb5adb58f6a05f6&units=metric';


module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      console.log('hi', res);
      if (res.data.cod && res.data.message) {
        console.log(res);
        throw new Error('Kunne ikke finne byen du søkte etter.');
      } else {
        return res.data.main.temp;
      }
    }, function(err){
      console.log(err.response.data.message);

      throw new Error('Kunne ikke finne byen du søkte etter.');
    });
  }
}
