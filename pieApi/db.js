require('dotenv').config()

const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {   
    host: 'localhost', //7
    dialect: 'postgres'  ///8
});

sequelize.authenticate()
    .then(() => console.log('postgres db is connected'))
    .catch(err => console.log(err))

module.exports = sequelize