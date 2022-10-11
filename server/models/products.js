const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  id: {type: String},
  name: {type: String},
  image: {type: String},
  price: {type: String},
  on_stock: {type: Number},
})

module.exports = mongoose.model('Products', productSchema)