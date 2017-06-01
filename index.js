var express = require('express');
var app = express();
var ejs = require('ejs');
var engine = require('ejs-mate');
var path = require('path');

// set static folder
app.use(express.static(__dirname + '/assets'));
app.use(express.static(path.join(__dirname, 'views')));


//Create EJS Engine view
app.set('view engine', 'html');
app.engine('ejs', engine);
app.set('view engine', 'ejs');

var routes = require('./routes/index.js');


app.listen(4000, () => {
    console.log('Awesome server running on port 4000');
});

module.exports = app;
