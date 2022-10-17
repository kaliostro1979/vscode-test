const express = require('express')
const router = express.Router()

const Product = require('../models/products')


router.get('/admin/edit-product', async (req, res)=>{
    const product = await Product.findByIdAndUpdate({_id: req.query.id}, {
        price: req.query.price,
        sale_price: req.query.sale_price,
        sale: req.query.sale,
        category: req.query.category,
        description: req.query.description
    })
    res.json({status: "ok", product})
})

module.exports = router
