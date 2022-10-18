const express = require('express')
const router = express.Router()
const Products = require('../models/products')

router.get('/admin/remove-item', async (req, res)=>{
    const product = await Products.deleteOne({_id: req.query.id})
    const products = await Products.find({})
    return res.json(products);
})

module.exports = router
