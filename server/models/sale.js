const mongoose = require("mongoose")

const saleSchema = mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: String
    },
    sale_price: {
        type: String
    },
    sale: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('Sale', saleSchema)