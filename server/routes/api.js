var express = require('express');
var router = express.Router();
var Llama = require("../models/llamas.js");


//get all
router.get('/llamas', function(req, res, next) {
  Llama.find(function(err,llamas){
    if (err){
      res.json({"message":err});
    }else{
      res.json(llamas);
    }
  });
});
// get one
router.get('/llamas/:id', function(req, res, next) {
  Llama.findById(req.params.id, function(err, llama){
    if (err){
      res.json({"message":err});
    }else{
      res.json(llama);
    }
  });
});

// post llama
router.post('/llamas', function(req, res, next) {
  var newLlama = new Llama(req.body);
  newLlama.save(function(err, llama){
    res.json(llama);
  });
});

// edit one llama
router.put('/llamas/:id', function(req, res, next) {
  var options = {"new":true};
  Llama.findByIdAndUpdate(req.params.id, req.body, options, function(err, llama){
    res.json(llama);
  });
});

//delete llama
router.delete('/llamas/:id', function(req, res, next) {
  Llama.findByIdAndRemove(req.params.id, function(err, llama){
    if (err){
      res.json({"message":err});
    }else{
      res.json({"messege":"success"});
    }
  });
});
module.exports = router;
