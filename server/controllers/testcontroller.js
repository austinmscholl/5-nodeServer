var express = require('express');   //1
var router = express.Router();      //2

router.post('/one', function(req, res) {
    res.send("Test 1 went through!")
});

//8
module.exports = router;