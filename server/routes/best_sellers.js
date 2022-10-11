const express = require("express")
const router = express.Router()

const BestSellers = require("../models/best_sellers")

router.get('/', function(req, res){
    BestSellers.findOne({category: req.query.category}, function(err, bestSellers){
        if(err){
            console.log(err);
        }else {
            res.json(bestSellers)
        }
    })
})

module.exports = router