const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Product = require('../models/products')
const multer = require('multer')

//const product = new Product()
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../server/public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '' + file.originalname)
  },
})

const upload = multer({ storage: storage })


router.post('/admin/add-new-product', upload.single('image'), async (req, res)=>{
    const image = (req.file) ? req.file.filename : null
    const {title, rate, category, on_stock, description, price, sale_price, sale} = req.body
    const product = new Product({title, rate, image, category, on_stock, description, price, sale_price, sale})
    let response = await product.save()
    res.send({product, status: 'ok'})
})

module.exports = router
