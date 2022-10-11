const express = require("express")
const router = express.Router()

const Sale = require("../models/sale")

router.get('/', function(req, res){
    Sale.find({}, function(err, sale){
        if(err){
            console.log(err);
        }else {
            res.json(sale)
        }
    })
})

module.exports = router