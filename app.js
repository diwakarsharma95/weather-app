const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')

const address = process.argv[2]
if(!address){
    console.log(chalk.bold.red.inverse("Please provide an address"))
}else{
    geocode(address, (error, geoData) => {
        if(error){
            return console.log(error)
        }
        forecast(geoData.latitude,geoData.longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            console.log(chalk.bold.green(geoData.location))
            console.log(chalk.bold.green(forecastData.forecast))
        })
    })
}