const request = require('request')
const geocode = require('./utils/geocode')
const chalk = require('chalk')


//  const url = 'http://api.weatherstack.com/current?access_key=d82468890da06c4025d831a79423be22&query=-27.469770,153.025131&units=m'
//  const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGl3YWthcnNoYXJtYSIsImEiOiJjazk5ZW1jbzMxZmJlM2dvNTdpb3FiYXJ0In0.OWUip85iOZBM373RDZqrjw&limit=1'
 
//  request({url: url, json: true}, (error, response) => {
//      if(error){
//          console.log(chalk.bold.red.inverse("Unable to connect to weather service!"))
//      }else if(response.body.error){
//          console.log(chalk.bold.red.inverse(`${response.body.error.info} Unable to find location !`))
//      }else{
//         const temp = response.body.current.temperature
//         const feelslike = response.body.current.feelslike
//         const weather_description = response.body.current.weather_descriptions[0]
//         console.log(chalk.green.bold(`${weather_description}. It is currently ${temp} degree out. It feels like ${feelslike} degree out.`))
//      }
//  })

// request({url: geocodeURL, json: true}, (error, response) => {
//     if(error){
//         console.log(chalk.bold.red.inverse('Unable to connect to location service!'))
//     }else if(response.body.message === 'Not Found'){
//         console.log(chalk.bold.red.inverse('Please enter a location'))
//     }else if(response.body.features.length === 0){
//         console.log(chalk.bold.red.inverse('Location not found'))
//     }
//     else{
//         const longitude = response.body.features[0].center[0]
//         const latitude = response.body.features[0].center[1]
//         console.log(chalk.green.bold(`Longitude: ${longitude} and Latitude: ${latitude}`))
//     }
// })

geocode('Raisinghnagar', (error, data) => { 
    console.log(chalk.bold.red.inverse('Error',error))
    console.log(chalk.bold.green("Data"),data)
})
