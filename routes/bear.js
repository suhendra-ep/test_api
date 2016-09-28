var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bear = mongoose.model('Bear');

//Routing for Get All and create new BEAR
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
            Bear.find(function(err, data){
                if(err)
                    return res.send(500, err);
                
                return res.json(data);
            });
        });

// Routing
router.route('/:bearId')
        .get(function(req, res){
            Bear.findById(req.params.bearId, function(err, data){
                if(err)
                    return res.send(err);
                return res.json(data);
            });
        })

        // Update the bear
        .put(function(req, res){
            Bear.findById(req.params.bearId, function(err, bear){
                if(err)
                    return res.send(500, err);
                
                bear.name = req.body.name;
                bear.save(function(err, data){
                    if(err)
                        return res.send(500, err);
                    
                    return res.json(data);
                })
            });
        })

        // Delete the bear
        .delete(function(req, res){
            Bear.remove({
                _id: req.params.bearId
            }, function(err, bear){
                if(err)
                    return res.send(500, err);
                return res.json(bear);
            });
        });
module.exports = router;