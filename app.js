const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')


geocode('Brisbane', (error, data) => { 
    console.log(chalk.bold.red.inverse('Error'),error)
    console.log(chalk.bold.green("Data"),data)
    return data
})

forecast(-27.469,153.0235, (error, data) => {
    console.log(chalk.bold.red.inverse('Error'), error)
    console.log(chalk.bold.green('Data'), data)
})