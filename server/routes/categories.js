const express = require("express")
const router = express.Router()

const Categories = require("../models/categories")

router.get('/categories', async (req, res) => {
    const categories = await Categories.find({})
    res.json(categories)
})

router.post('/admin/add-category', async (req, res)=> {
    await Categories.create({name: req.body.name.split(" ").join("-")})
    const categories = await Categories.find({})
    res.send(categories)
})


module.exports = router
