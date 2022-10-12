const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('../../models/user')


//Login
router.post('/admin/login', async function (req, res) {
    const {email, password} = req.body
    const user = await User.findOne({email})

    if (user && await bcrypt.compare(password, user.password)){
        const token = jwt.sign({
            email: user.email, name: user.name
        }, "secret123")
        return res.json({status: 'ok', token: token})
    }else {
        res.json({status: 'error', user: false})
    }
})

//Registration
router.post('/admin/registration', async function (req, res) {
    const {name, email, password} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const userData = {
        name, email, password: hashedPassword
    }
    try {
        const user = await User.create(userData)
        res.send({user, status: 'ok'})
    }catch (e) {
        res.json({status: 'error', error: 'Duplicate email'})
    }
})

//Logout
router.get('/admin/logout', async function (req, res) {
    return res.json({status: 'ok', token: null})
})

module.exports = router
