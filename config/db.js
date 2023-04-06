const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb+srv://masaihospital:masaihospital@cluster0.dnt5wht.mongodb.net/masaihospitaldb?retryWrites=true&w=majority')

module.exports = {
    connection
} 