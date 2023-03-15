const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {trips: trips})
})

router.get('/:cityName', (req, res) => {
    res.render('trip-details', {nameOfTheCity: req.params.cityName})
})

router.post('/delete-trip', (req, res) => {
    const tripId = req.body.tripId
    trips = trips.filter(trip => trip.tripId != tripId)
    res.redirect('/trips')
})


module.exports = router