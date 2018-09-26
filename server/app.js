require('dotenv').config();

var express = require('express'); //1
var app = express(); //2
var test = require('./controllers/testcontroller');
var user = require('./controllers/usercontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync(); // tip: pass in {force: true} for resetting tables

app.use(bodyParser.json());

app.use('/test', test);

app.use('/api/user', user);

// app.use("/test/one", test);

//3			//4
app.listen(3000, function() {
	console.log('Hey man!!!') //5
});

app.use('/api/test', function(req, res){
	res.send("This is data from the /api/test endpoint. It's from the server.");
});

