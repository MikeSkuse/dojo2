const express = require('express')
const app = express()
const pkg = require('../package.json')
const log = require('./log')
const request = require('request-promise-native')

app.get('/', async (req, res) => {
    // let ua = req.get('User-Agent')
    log().info(`${pkg.name} hit`)
    let data = await request({
        uri: 'http://51.141.32.142//',
        method: 'GET'
    })
    res.send(`Microservice one said : ${data}`)
    
})

const listen = (port, done) => {
    return app.listen(port, done)
}

module.exports = {
    listen
}