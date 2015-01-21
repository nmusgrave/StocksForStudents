var express = require('express')
var bloomberg = require('./module_bloomberg.js')
var fs = require('fs')

var app = express()

app.get('/api/bloom/:id', function(req, res) {
    bloomberg(req.params.id, function(data) {
        console.log(data)
        var buys = []
        var sells = []
        var dates = []
        data.data[0].securityData.fieldData.forEach(function(elem) {
            // make random num [0,1], shift so half are negative, scale by opening amount
            var shift = (Math.random() - 0.5) * elem.OPEN;
            buys.push(elem.PX_LAST + shift)
            sells.push(elem.PX_LAST - shift)
            var d = new Date(elem.date)
            dates.push(d.toDateString())

            elem.BUY = elem.PX_LAST + shift;
            elem.SELL = elem.PX_LAST - shift;
        })
        res.send({original: data, buys: buys, sells: sells, dates: dates})
    })
})

app.use(express.static(__dirname + '/public'));

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port " + 8080);