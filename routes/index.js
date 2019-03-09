var express = require('express');
var router = express.Router();
var monk=require('monk');
var dbs=monk('localhost:27017/aditya');
var users = dbs.get('users');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/getuser', function(req, res, next) {
  users.find({},function(err,docs){
  res.send(docs);
  });
});
router.post('/postuser', function(req, res, next) {
  console.log(req.body);
  users.insert(req.body, function(err,docs){
  res.send(docs);
});
});
router.put('/edit/:_id', function(req, res, next) {
  var id = req.params._id;
  console.log(id);
  users.update({_id:id},{$set:req.body}, function(err,docs){
  res.send(docs);
});
});
router.delete('/delete/:_id', function(req, res, next) {
  var id = req.params._id;
  console.log(id);
  users.remove({_id:id}, function(err,docs){
  res.send(docs);
});
});
module.exports = router;
