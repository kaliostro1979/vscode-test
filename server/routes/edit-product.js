const express = require('express')
const router = express.Router()

const Product = require('../models/products')
const Products = require("../models/products");


router.get('/admin/edit-product', async (req, res)=>{
    const product = await Product.findByIdAndUpdate({_id: req.query.id}, {
        price: req.query.price,
        sale_price: req.query.sale_price || "",
        sale: req.query.sale || "",
        category: req.query.category,
        description: req.query.description || "",
        best_seller: req.query.best_seller || false
    })
    const products = await Products.find({})
    return res.json(products);
})

module.exports = router
