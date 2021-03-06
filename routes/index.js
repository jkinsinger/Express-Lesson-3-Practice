var express = require('express');
var router = express.Router();
var users = require('../models/users');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* Basic routing - shows up on localhost:3000/home */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Working with Models */
router.get('/person/:id', function(req, res, next){
  // get object that matches the id
  let person = users.people.find(peep => {
    return peep.id === parseInt(req.params.id);
  })
  res.render('index', {person});
  console.log(req.url);
});

module.exports = router;
