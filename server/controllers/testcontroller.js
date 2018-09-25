var express = require('express');   //1
var router = express.Router();      //2

//3     //4     //5         //6
router.get('/', function (req, res) {
    //7
    res.send('Heyy!!! This is a test route!');
});

router.get('/about', function(req, res) {
    res.send('This is an about route');
});

router.get('/contact', function(req, res) {
    res.send({user: "kenn", email: "kenn@beastmode.com"});
})

router.get('/projects', function (req, res) {
    res.send(['CSS Creature', 'Mock Store', 'Recipe API'])
});

router.get('/mycontacts', function(req, res) {
    res.send([
        {user: 'kenn', email: 'kenn@beastmode.com'},
        {user: 'aaron', email: 'aaron@beastmode.com'},
        {user: 'qunicy', email: 'quincy@beastmode.com'},
        {user: 'tom', email: 'tom@beastmode.com'}
    ]);
});

//8
module.exports = router;