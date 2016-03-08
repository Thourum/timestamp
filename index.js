var express = require('express');

var app = express();
var total_opens = 0;

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dataJson = {"unix": null , "natural": null};

app.get('/', function(req, res) {
  res.send("Hello");
  total_opens++;
});

app.get('/:time', function(req, res) {
  if (Number(req.params.time)){
    var myDate = new Date( req.params.time *1000);
<<<<<<< Updated upstream
    dateJson.natural = months[myDate.getMonth()]+" "+myDate.getDate()+", "+(myDate.getYear()+1900);
    dateJson.unix = parseInt(req.params.time, 10 );
    res.send(dateJson);
=======
    dataJson.natural = months[myDate.getMonth()]+" "+myDate.getDate()+", "+(myDate.getYear()+1900);
    dataJson.unix = parseInt(req.params.time, 10 );
    res.send(dataJson);
>>>>>>> Stashed changes
  }else {
    var myDate = new Date(req.params.time); // Your timezone!
    var myEpoch = myDate.getTime()/1000.0;
    var myNaturalDate = new Date(myEpoch *1000);
<<<<<<< Updated upstream
    if (typeof myEpoch === new Date()){
        dateJson.unix = parseInt(myEpoch, 10);
        dateJson.natural = months[myNaturalDate.getMonth()]+" "+myNaturalDate.getDate()+", "+(myNaturalDate.getYear()+1900);
    }
    res.send(dateJson);
=======
    console.log(isNaN(myEpoch));
    console.log(myEpoch);
    if(isNaN(myEpoch)){
        dataJson.unix = parseInt(myEpoch, 10);
        dataJson.natural = months[myNaturalDate.getMonth()]+" "+myNaturalDate.getDate()+", "+(myNaturalDate.getYear()+1900);
        res.send(dataJson);
    }else {
        res.send(dataJson);
    }
>>>>>>> Stashed changes
  }
});


app.listen(process.env.PORT || 8000)
