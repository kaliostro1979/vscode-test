const mongoose = require("mongoose")

const heroBannerSchema = mongoose.Schema({
    page: {
        type: String
    },
    data: {
        id: {
            type: String
        },
        title: {
            type: String
        },
        text: {
            type: String
        },
        image: {
            type: String
        }
    }
})

module.exports = mongoose.model('Banner', heroBannerSchema)