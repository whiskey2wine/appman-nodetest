const axios = require('axios');
const moment = require('moment');

const bangkokForecast = async () => {
  let output = [];
  try {
    await axios
      .get(
        'http://api.openweathermap.org/data/2.5/forecast/daily?q=Bangkok&units=metric&cnt=7&APPID=e5446373eef6128679c7fa8a1951d788'
      )
      .then(res => {
        res.data.list.forEach(day => {
          output.push({
            date: moment.unix(day.dt).format('YYYY-MM-DD'),
            minTemp: day.temp.min,
            maxTemp: day.temp.max
          });
        });
      });
  } catch (err) {
    console.error(err);
  }
  return output;
};

module.exports = { bangkokForecast };
