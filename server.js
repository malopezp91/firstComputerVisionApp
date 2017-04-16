var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

var port = process.env.PORT || 8000;

app.listen(port, function() {
    console.log("App is running on port " + port);
});