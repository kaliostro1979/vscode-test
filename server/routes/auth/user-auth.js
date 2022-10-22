const express = require("express")
const bcrypt = require("bcrypt");
const router = express.Router()

router.post("/register", async (req, res)=>{
    const {name, email, password} = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
})

router.post("/login", async (req, res)=>{
    const {email, password} = req.body
})