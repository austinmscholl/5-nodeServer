//1
const Sequelize = require('sequelize');

      //2               //3       //4         //5            //6          
const sequelize = new Sequelize('workoutlog', 'postgres', 'Postgres!Elevenfifty46280', {        //Postgres!Elevenfifty46280
    host: 'localhost', //7
    dialect: 'postgres'  ///8
});
    //9      //10         //11         
sequelize.authenticate().then(
    function() { //12
        console.log('Connected to workoutlog postgres database');
    },
    function(err){ //13
        console.log(err);
    }
);
                 //14
module.exports = sequelize;