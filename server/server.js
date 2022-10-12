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
const login = require('./routes/auth/auth')
const registration = require('./routes/auth/auth')
const logout = require('./routes/auth/auth')

require('dotenv').config()

app.use(cors())
app.use(express.json())

app.use('/products', products)
app.use('/banner', banner)
app.use('/sale', sale)
app.use('/categories', categories)
app.use('/best-sellers', bestSellers)
app.use('/', login)
app.use('/', registration)
app.use('/', logout)

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
