const express = require('express')
const connection = require('./config/db')
const { userRoutes } = require('./routes/user.routes')
const { appointmentRouete } = require('./routes/appointment.routes')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Welcome to Masai Hospital")
})

app.use('/users', userRoutes)
app.use('/appointments', appointmentRouete)

app.listen(4500, async () => {
    try {
        await connection
        console.log('Connected to db')
    } catch (err) {
        console.log('not Connected to db')
    }
    console.log('Runing port at 4500')
})