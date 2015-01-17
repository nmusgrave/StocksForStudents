var express = require('express')
var bloomberg = require('./module_bloomberg.js')
var fs = require('fs')

var app = express()

//var server = require('http').createServer(app)

/*
server.listen(3000, function() {
    console.log('server running on http://localhost:3000/')
})
*/
app.get('/api/bloom', function(req, res) {
    bloomberg(function(data) {
        //console.log(data.data[0].securityData)

        data.data[0].securityData.fieldData.forEach(function(elem) {
            // make random num [0,1], shift so half are negative, scale by opening amount
            var shift = (Math.random() - 0.5) * elem.OPEN;
            elem.BUY = elem.PX_LAST + shift;
            elem.SELL = elem.PX_LAST - shift;
        })

        res.send(data)
    })
})


app.use(express.static(__dirname + '/public'));

/*
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public'); // load the single view file (angular will handle the page changes on the front-end)
});
*/
// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port " + 8080);