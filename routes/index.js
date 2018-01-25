var express = require('express');
var router = express.Router();

var account = require('../models/data').account;
var group = require('../models/data').group;

router.get('/v1.0/account', function (req, res, next) {
  account.find({}).populate('group').exec(function (err, post) {
    if (err) {
      console.log(err.name);
    }
    else {
      res.json(post);
    }
  })
});

router.get('/v1.0/account/:id', function (req, res, next) {

});

router.post('/v1.0/account/', function (req, res, next) {
  var newgroup = new group({name:'admin'});
  newgroup.save()

  var newAccount = new account();
  newAccount.username = req.body.username;
  newAccount.password = req.body.password;
  newAccount.group = newgroup._id;
  newAccount.fullname = req.body.fullname;
  newAccount.phone = req.body.phone;
  newAccount.email = req.body.email;
  newAccount.active = req.body.active;
  newAccount.save(function (err, post) {
    if (err) {
      res.send(err);
    }
    else {
      res.json({ "success": true });
    }
  })
});

router.put('/v1.0/account/:id', function (req, res, next) {

});

router.delete('/v1.0/account/:id', function (req, res, next) {

});

module.exports = router;
