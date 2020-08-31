const request = require('request-promise');

const API_KEY = '23462fd06dece65c47c0fd91a553ed4e';

class Weather{
    static retrieveByCity(city, callback){
        request({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
            json: true
        }).then(function (res){
            callback(res);
        }).catch(function (err){
            console.log(err);
            callback({error: 'Could not reach OpenWeatherMap API.'});
        });
    }
}

module.exports = Weather;