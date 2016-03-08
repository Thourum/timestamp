var express = require('express');

var app = express();
var total_opens = 0;

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dateJson = {"unix": null , "natural": null};

app.get('/', function(req, res) {
  res.send("Hello");
  total_opens++;
  console.log(" Total : \t"+ total_opens);
});

app.get('/:time', function(req, res) {
  if (Number(req.params.time)){
    var myDate = new Date( req.params.time *1000);
    console.log(myDate);
    dateJson.natural = months[myDate.getMonth()]+" "+myDate.getDate()+", "+(myDate.getYear()+1900);
    dateJson.unix = parseInt(req.params.time, 10 );
    console.log("got Number");
    res.send(dateJson);
  }else {
    var myDate = new Date(req.params.time); // Your timezone!
    var myEpoch = myDate.getTime()/1000.0;
    var myNaturalDate = new Date(myEpoch *1000);
    dateJson.natural = months[myNaturalDate.getMonth()]+" "+myNaturalDate.getDate()+", "+(myNaturalDate.getYear()+1900);
    dateJson.unix = parseInt(myEpoch, 10);
    res.send(dateJson);
  }
});


console.log("Listening at :\t https://timestamp-thourum-2.c9users.io/")
app.listen(8080);