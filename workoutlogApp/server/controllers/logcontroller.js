var express = require('express')
var router = express.Router()      //1
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var Log = sequelize.import('../models/log');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken'); 

const validateSession = require('../middleware/validate-session');


router.post('/', validateSession, function(req, res) {
    const logFromRequest = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
        owner: req.user.id
    }
    
    Log.create(logFromRequest).then(
      function createSuccess(user) {
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
});

router.get('/', validateSession, function(req, res) {
    Log.findAll()
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({ error: err }))
});

router.get('/:id', validateSession, function(req, res) {
    Log.findOne({ where: { id: req.params.id }})
        .then(log => res.status(200).json(log))
        .catch(err => res.status(500).json({ error: err }))
});

router.put('/:id', validateSession, function(req, res) {
    if (!req.errors) {
        Log.update(req.body.log, { where: { id: req.params.id }})
            .then(log => res.status(200).json(log))
            .catch(err => res.status(500).json({ error: err}))
    } else {
        res.status(500).json(req.errors)
    }
});

// router.put('/:id', validateSession, function(req, res) {
//     var data = req.params.id;
//     var logupdatedata = req.body;

//     Log
//         .update(
//             logupdatedata,{where: {id: data}}
//         ).then(
//             function updateSuccess(updatedLog) {
//                 res.json({
//                     logupdatedata: logupdatedata
//                 });
//             },
//             function updateError(err) {
//                 res.send(500, err.message);
//             }
//         )
// });

router.delete('/:id', validateSession, function(req, res) {
    if (!req.errors) {
        Log.destroy({ where: { id: req.params.id }})
            .then(log => res.status(200).json(log))
            .catch(err => res.status(500).json({ error: err }))
    } else {
        res.status(500).json(req.errors)
    }
});
  
module.exports = router;