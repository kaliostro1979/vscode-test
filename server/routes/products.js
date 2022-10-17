const express = require('express')
const router = express.Router()

const Products = require('../models/products')

router.get('/products', function (req, res) {
  if (!req.query.id) {
    Products.find({}, function (err, products) {
      if (err) {
        console.log(err)
      } else {
        res.json(products)
      }
    })
  }
  
  if (Object.keys(req.query).includes('id')) {
    Products.findOne({ _id: req.query.id }, function (err, product) {
      if (err) {
        console.log(err)
      } else {
        res.json(product)
      }
    })
  }
})

router.get('/product-remove-bestseller', async function(req, res){
  const product = await Products.findOneAndUpdate({ _id: req.query.id }, {best_seller: req.query.status})
  res.json(product)
})

module.exports = router
