const express = require('express')
const { appointmentModel } = require('../model/appointment.model')

const appointmentRouete = express.Router()

appointmentRouete.get('/', async (req, res) => {
    const { skip, sort, order, q, filter } = req.query

    let filterobj = {}
    if (filter) {
        filterobj['specialization'] = filter
    }

    let sortobj = {}
    if (sort && order) {
        sortobj['date'] = order
    }

    try {
        let appoinments = await appointmentModel.find(filterobj).sort(sortobj).skip(skip).limit(4)
        res.send(appoinments)
    } catch (err) {

    }
})

appointmentRouete.post('/', async (req, res) => {
    try {
        const appoinment = new appointmentModel(req.body)
        await appoinment.save()
        res.send({ "msg": "appoinment has been posted" })
    } catch (err) {
        res.send({ "msg": "appoinment is not posted" })
        console.log(err)
    }
})

module.exports = {
    appointmentRouete
}