module.exports = function(security, callback) {

var request = require('request')
var fs = require('fs')

var req = {
        "securities": [security], //["GOOG US Equity"], // TODO- SELECT DIFF COMPANIES
        "fields": ["PX_LAST", "OPEN", "EPS_ANNUALIZED"],
        "startDate" : "20150101", // TODO- SELECT DIFFERENT START TIME
        "periodicitySelection": "DAILY"
    }

var options = {
    url: 'https://54.174.49.59/request/blp/refdata/HistoricalData',
    agentOptions : {
    	key: fs.readFileSync('client.key'),
	    cert: fs.readFileSync('client.crt'),
	    ca: fs.readFileSync('bloomberg.crt'),
	    strictSSL: false
    },
    json : req
}

request.post(options, function(err, response, body) {
	if(err ) {
		console.error("module failllll")
	}
	callback(body)
})

}