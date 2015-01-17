var express = require('express')
var bloomberg = require('./module_bloomberg.js')
var fs = require('fs')

var app = express()

var server = require('http').createServer(app)

server.listen(3000, function() {
    console.log('server running')
})

app.get('/', function(req, res) {

    bloomberg(function(data) {
        console.log(data.data[0].securityData)

        data.data[0].securityData.fieldData.forEach(function(elem) {
            // make random num [0,1], shift so half are negative, scale by opening amount
            var shift = (Math.random() - 0.5) * elem.OPEN;
            elem.BUY = elem.PX_LAST + shift;
            elem.SELL = elem.PX_LAST - shift;
        })

        res.send(data)
    })
})

