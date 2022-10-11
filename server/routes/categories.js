const express = require("express")
const router = express.Router()

const Categories = require("../models/categories")

router.get('/', function(req, res){
    Categories.find({}, function(err, categories){
        if(err){
            console.log(err);
        }else{
            res.json(categories)
        }
    })
})

module.exports = router