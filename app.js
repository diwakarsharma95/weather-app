const request = require('request')
const chalk = require('chalk')

 const url = 'http://api.weatherstack.com/current?access_key=d82468890da06c4025d831a79423be22&query=-27.469770,153.025131&units=m'
 const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGl3YWthcnNoYXJtYSIsImEiOiJjazk5ZW1jbzMxZmJlM2dvNTdpb3FiYXJ0In0.OWUip85iOZBM373RDZqrjw&limit=1'
 
 request({url: url, json: true}, (error, response) => {
    const temp = response.body.current.temperature
    const feelslike = response.body.current.feelslike
    const weather_description = response.body.current.weather_descriptions[0]
    console.log(chalk.green.bold(`${weather_description}. It is currently ${temp} degree out. It feels like ${feelslike} degree out.`))
 })

request({url: geocodeURL, json: true}, (error, response) => {
    const longitude = response.body.features[0].center[0]
    const latitude = response.body.features[0].center[1]
    console.log(chalk.green.bold(`Longitude: ${longitude} and Latitude: ${latitude}`))
})