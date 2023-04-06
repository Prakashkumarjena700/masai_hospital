const express = require('express')
const bcrypt = require('bcrypt')
const { userModel } = require('../model/user.model')
const jwt = require('jsonwebtoken')

const userRoutes = express.Router()

userRoutes.post("/signup", async (req, res) => {
    const { Email, Password } = req.body
    try {
        bcrypt.hash(Password, 9, async (err, hash) => {
            if (err) {
                res.send({ 'msg': 'Something went wrong' })
            } else {
                const user = new userModel({ Email, Password: hash })
                await user.save()
                res.send({ 'msg': 'New user has been register' })
            }
        })
    } catch (err) {
        res.send({ 'msg': 'Something went wrong' })
        console.log(err)
    }
})

userRoutes.post("/login", async (req, res) => {
    const { Email, Password } = req.body
    try {
        const user = await userModel.find({ Email })
        if (user.length > 0) {
            bcrypt.compare(Password, user[0].Password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userID: user[0]._id }, 'masaihospital')
                    res.send({ token })
                } else {
                    res.send({ 'msg': 'Something went wrong' })
                }
            })
        } else {
            res.send({ 'msg': "User not found please register" })
        }
    } catch (err) {
        res.send({ 'msg': 'Something went wrong' })
        console.log(err)
    }
})

module.exports = {
    userRoutes
}