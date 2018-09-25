var express = require('express'); //1
var app = express(); //2
var test = require('./controllers/testcontroller');

var sequelize = require('./db');

sequelize.sync(); // tip: pass in {force: true} for resetting tables

app.use('/test', test);
app.use('/test/about', test);
app.use('/test/contact', test);
app.use('/test/projects', test);
app.use('/test/mycontacts', test);

//3			//4
app.listen(3000, function() {
	console.log('Hey man!!!') //5
});

app.use('/api/test', function(req, res){
	res.send("This is data from the /api/test endpoint. It's from the server.");
});

