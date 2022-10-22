const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
var cors = require('cors')

const products = require('./routes/products')
const banner = require('./routes/banner')
const sale = require('./routes/sale')
const categories = require('./routes/categories')
const bestSellers = require('./routes/best_sellers')
const login = require('./routes/auth/admin-auth')
const registration = require('./routes/auth/admin-auth')
const logout = require('./routes/auth/admin-auth')
const addNewProduct = require('./routes/add-new-product')
const removeProduct = require('./routes/remove-product')
const addCategory = require('./routes/categories')
const removeFromBestseller = require('./routes/products')
const changeProductCategory = require('./routes/products')
const editProduct = require('./routes/edit-product')
const removeCategory = require('./routes/remove-category')
const userAuth = require('./routes/auth/user-auth')

require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use('/public', express.static('public'))

app.use('/', products)
app.use('/banner', banner)
app.use('/sale', sale)
app.use('/', categories)
app.use('/best-sellers', bestSellers)
app.use('/', login)
app.use('/', registration)
app.use('/', logout)
app.use('/', addNewProduct)
app.use('/', removeProduct)
app.use('/', addCategory)
app.use('/', removeFromBestseller)
app.use('/', changeProductCategory)
app.use('/', editProduct)
app.use('/', removeCategory)
app.use('/', userAuth)

mongoose.connect(
  process.env.MONGODB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('DB connect successfuly')
    }
  }
)

app.listen(PORT, () => {
  console.log(`Server run in ${PORT}`)
})
