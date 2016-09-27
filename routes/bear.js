var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bear = mongoose.model('Bear');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/')
        .post(function(req, res){
            var bear = new Bear();
            bear.name = req.body.name;
            console.log(req.body);

            bear.save(function(err, data){
                if(err)
                    return res.send(500, err);
                
                return res.json(data);
            });
        })
        .get(function(req, res){

        });
module.exports = router;