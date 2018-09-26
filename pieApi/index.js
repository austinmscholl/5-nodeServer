require('dotenv').config();

const express = require('express');
const app = express();      // automatically trigger(invoke) express by using parentheses 

const pie = require('./controllers/piecontroller')
const sequelize = require('./db')
const bodyParser = require('body-parser')

sequelize.sync();

app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))
console.log(__dirname);

app.get('/', (req, res) => res.render('index'));

app.use('/pies', pie)

app.listen(process.env.PORT, () => console.log(`App is listening ${process.env.PORT}.`));    //callback function(function called within a function) .listen is a method 
