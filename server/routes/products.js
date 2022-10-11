const express = require('express')
const router = express.Router()


const Products = require('../models/products')


router.get('/', function (req, res) {
  Products.find({}, function (err, products) {
    if (err) {
      console.log(err)
    } else {
      res.json(products)
    }
  })
})

router.get('/', function (req, res) {
  Products.findOne({_id: req.query.id}, function (err, product) {
    if (err) {
      console.log(err)
    } else {
      res.json(product)
    }
  })
})


module.exports = router