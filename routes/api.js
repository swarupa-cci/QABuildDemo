

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/project.js');
var User = require('../models/user.js');

/* GET ALL PRODUCTS */
router.get('/project', function(req, res, next) {
  Project.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/project:id', function(req, res, next) {
  Project.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE PRODUCT */
router.post('/project', function(req, res, next) {
    Project.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE PRODUCT */
router.put('/project:id', function(req, res, next) {
    Project.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
    
  });
});

/* DELETE PRODUCT */
router.delete('/project:id', function(req, res, next) {
    Project.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.post('/login', function(req, res, next) {
  var username = req.body.name;
  var isAdmin = req.body.ssAdmin;
  var user = new User(req.body);
  User.create(user, function (err, post) {
  if (err) return next(err);
  //res.json(post);


  res.render('user.ejs');
});
});

module.exports = router;