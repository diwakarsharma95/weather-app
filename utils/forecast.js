const request = require('request')
const chalk = require('chalk')

const forCast = (latitude,longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=d82468890da06c4025d831a79423be22&query=${latitude},${longitude}&units=m`

    request({url: url, json: true}, (error, response) => {
        if(error){
            console.log(chalk.bold.red.inverse("Unable to connect to weather service!"),undefined)
        }else if(response.body.error){
            console.log(chalk.bold.red.inverse(`${response.body.error.info} Unable to find location !`),undefined)
        }else{
            callback(undefined,{
                temp: response.body.current.temperature,
                feelslike: response.body.current.feelslike,
                weather_description: response.body.current.weather_descriptions[0],
                forecast: `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degree out. It feels like ${response.body.current.feelslike} degree out.`
            })
        }
    })
}


module.exports = forCast