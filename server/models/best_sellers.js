const mongoose = require("mongoose")

const bestSellerSchema = mongoose.Schema({
    category: {
        type: String
    },
    data: [
        {
            id: {
                type: String
            },
            title: {
                type: String
            },
            rate: {
                type: Number
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
        }
    ]
})

module.exports = mongoose.model("BestSellers", bestSellerSchema)