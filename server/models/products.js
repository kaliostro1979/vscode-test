const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  title: {type: String},
  rate: {type: Number},
  image: {type: String},
  price: {type: String},
  sale_price: {type: String},
  category: {type: String},
  on_stock: {type: Number},
  best_seller: {type: Boolean}
})

module.exports = mongoose.model('Products', productSchema)