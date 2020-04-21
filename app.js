 const request = require('request')

 const url = 'http://api.weatherstack.com/current?access_key=d82468890da06c4025d831a79423be22&query=-27.469770,153.025131'

 request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
 })