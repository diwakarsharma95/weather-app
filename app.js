const request = require('request')
const chalk = require('chalk')

 const url = 'http://api.weatherstack.com/current?access_key=d82468890da06c4025d831a79423be22&query=-27.469770,153.025131&units=m'

 request({url: url, json: true}, (error, response) => {
    const temp = response.body.current.temperature
    const feelslike = response.body.current.feelslike
    const weather_description = response.body.current.weather_descriptions[0]
    console.log(chalk.green.bold(`${weather_description}. It is currently ${temp} degree out. It feels like ${feelslike} degree out.`))
 })