const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
var cors = require('cors')

const products = require('./routes/products')
const banner = require('./routes/banner')
const sale = require('./routes/sale')
const categories = require('./routes/categories')

require('dotenv').config()

app.use(cors())

app.get('/', (req, res, next) => {
  res.send('Hello World!')
})


app.use('/products', products)
app.use('/banner', banner)
app.use('/sale', sale)
app.use('/categories', categories)

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