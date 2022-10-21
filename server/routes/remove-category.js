const express = require('express')
const router = express.Router()


const Categories = require("../models/categories");


router.get('/admin/remove-category', async (req, res)=>{
    const category = await Categories.deleteOne({name: req.query.category})
    const categories = await Categories.find({})
    res.send(categories)
})

module.exports = router
