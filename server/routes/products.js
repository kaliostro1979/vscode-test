const express = require('express')
const router = express.Router()

const Products = require('../models/products')

router.get('/', function (req, res) {
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

module.exports = router
