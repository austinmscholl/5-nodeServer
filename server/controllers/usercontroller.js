var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/createuser', function (req, res) {
    var username = req.body.user.username;
    var pass = req.body.user.password;

    User.create({
        username: username,
        passwordhash: bcrypt.hashSync(pass, 10)

    }).then(
        function createSuccess(user){
            var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
            res.json({
                user: user,
                message: 'created',
                sessionToken: token
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
})

// router.post('/createuser', function (req, res) {

//     var username = req.body.user.username;
//     var pass = req.body.user.password;

//     User.create({
//         username: username,
//         passwordhash: bcrypt.hashSync(pass, 10)
//     }).then(
//         function createSuccess(user) {

//             var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});
//             res.json({
//                 user: user,
//                 message: 'created',
//                 sessionToken: token
//             });
//         },
//         function createError(err) {
//             res.send(500, err.message);
//         }
//     );
// });

// router.post('/signin', function(req, res) {
//     User.findOne( { where: { username: req.body.user.username } } ).then(
//         function(user) {
//             if (user) {
//                 bcrypt.compare(req.body.user.password, user.passwordhash, function(err, matches) {
//                     console.log("The value matches:", matches);
//                 })
//             } else {
//                 res.status(500).send({ error: "failed to authenticate, yo"});
//             }
//         },
//         function(err) {
//             res.status(501).send({ error: "you failed, yo"});
//         }
//     );
// });

router.post('/signin', function(req, res) {
    User.findOne( { where: { username: req.body.user.username } } ).then(
        function(user) {
            if (user) {
                bcrypt.compare(req.body.user.password, user.passwordhash, function (err, matches) {
                    if(matches) {
                        var token = jwt.sign({ id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24 });
                        res.json({
                            user: user,
                            message: "successfully authenticated",
                            sessionToken: token
                        });
                    } else {
                        res.status(502).send({ error: "you failed, yo" });
                    }
                });
            } else {
                res.status(500).send({ error: "failed to authenticate" });
            }
        },
        function (err) {
            res.status(501).send({ error: "you failed, yo" });
        }
    );
});

module.exports = router;