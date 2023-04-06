const mongoose = require('mongoose')

const appointmentSchema = mongoose.Schema({
    name: String,
    image: String,
    specialization: String,
    experience: Number,
    location: String,
    date: String,
    slots: Number,
    fee: Number
}, {
    versionKey: false
})

const appointmentModel = mongoose.model('appointments', appointmentSchema)

module.exports = {
    appointmentModel
}