const express = require('express')
const app = express()
const pkg = require('../package.json')
const log = require('./log')

app.get('/', async (req, res) => {
    let ua = req.get('User-Agent')
    log().info(ua, `${pkg.name} hit`)
    let data = await request({
        uri: 'http://51.141.32.142/'
        method: 'GET'
    })
    res.send('Welcome to Microservice-Two - This is the latest build. Microservice one said: ${data}')
})

const listen = (port, done) => {
    return app.listen(port, done)
}

module.exports = {
    listen
}