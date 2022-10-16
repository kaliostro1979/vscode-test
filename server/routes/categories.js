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

router.post('/admin/add-category', function(req, res){
    const category = Categories.create({name: req.body.name})
    res.send({status: "ok", category})
})

module.exports = router