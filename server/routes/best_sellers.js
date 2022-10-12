const express = require("express")
const router = express.Router()

const BestSellers = require('../models/products')

router.get('/', function (req, res) {

    BestSellers.find(req.query.category === 'all' ? {best_seller: true} : {
        category: req.query.category,
        best_seller: true
    }, function (err, bestSellers) {
        if (err) {
            console.log(err);
        } else {
            res.json(bestSellers)
        }
    })
})

module.exports = router
