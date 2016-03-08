var express = require('express');

var app = express();
var total_opens = 0;

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dataJson = {"unix": null , "natural": null};

function returnData(date) {
	if (typeof months[date.getMonth()] === 'undefined') {
		return null;	
	}else{
		return months[date.getMonth()]+" "+date.getDate()+", "+(date.getYear()+1900);
	}
};

app.get('/', function(req, res) {
    res.send("Hello");
});

app.get('/:time', function(req, res) {
    if (Number(req.params.time)){
        var myDate = new Date( req.params.time *1000);
        dataJson.natural = months[myDate.getMonth()]+" "+myDate.getDate()+", "+(myDate.getYear()+1900);
        dataJson.unix = parseInt(req.params.time, 10 );
        res.send(dataJson);
    }else {
        var myDate = new Date(req.params.time); // Your timezone!
        var myEpoch = myDate.getTime()/1000.0;
        var myNaturalDate = new Date(myEpoch *1000);
        dataJson.unix = parseInt(myEpoch, 10);
        dataJson.natural = returnData(myNaturalDate);
        res.send(dataJson);
    }
});


app.listen(process.env.PORT || 8000);
