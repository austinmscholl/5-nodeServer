require('dotenv').config();

var express = require('express');
var app = express();
var test = require('./controllers/testcontroller');
var user = require('./controllers/usercontroller');
var log = require('./controllers/logcontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());

app.use('/api', user);
app.use('/api/log', log)

app.listen(3000, function(){
    console.log('App is listening on 3000.')
});

//this is a minor change