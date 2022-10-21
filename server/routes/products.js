const express = require('express')
const router = express.Router()

const Products = require('../models/products')

router.get('/products', function (req, res) {
  if (!req.query.id && req.query.category) {
    if (req.query.category === 'all'){
      Products.find({}, function (err, products) {
        if (err) {
          console.log(err)
        } else {
          res.json(products)
        }
      })
    }else {
      Products.find({category: req.query.category }, function (err, products) {
        if (err) {
          console.log(err)
        } else {
          res.json(products)
        }
      })
    }
  }

  if (req.query.id) {
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
  const products = await Products.find({best_seller: true})
  res.json(products)
})

router.get('/product-change-category', async function(req, res){
  const product = await Products.findOneAndUpdate({ _id: req.query.id }, {category: req.query.category})
  res.json(product)
})

module.exports = router
