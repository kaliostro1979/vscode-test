const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Product = require('../models/products')

router.post('/admin/remove-item', (req, res)=>{
    const product = Product.deleteOne({_id: req.body._id}).exec(function(err,product) {
        if (err) {
            return res.status(500).json({errors:err, message: 'Internal server error'});
        }
        return res.status(200).json({product: product});
    });
})

module.exports = router