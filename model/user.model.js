const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    Email: String,
    Password: String
}, {
    versionKey: false
})

const userModel = mongoose.model("users", userSchema)

module.exports = {
    userModel
}