const express = require("express")
const router = express.Router()

const Banner = require("../models/banner")

router.get('/', function(req, res){    
    Banner.findOne({page: `${req.query.page}`}, function(err, banner){
        if(err){
            console.log(err);
        }else {
            res.json(banner)
        }
    })
})

module.exports = router