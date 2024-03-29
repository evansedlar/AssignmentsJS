const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress())

app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())

let trips = [{
    title: 'New Orleans',
    image: 'https://www.shutterstock.com/image-vector/flag-new-orleans-louisiana-usa-260nw-2114310374.jpg',
    departure: '2023-03-10',
    arrive: '2023-03-14',
    tripId: 1
}]

app.get('/', (req, res) => {
    res.render('index', {tripsObj: trips})
})

app.get('/addTrip', (req, res) => {
    res.render('add')
})

app.post('delete-trip', (req,res) => {
    // get the trip id from the body
    const tripId = req.body.tripId
    //delete the trip from trips array with the same tripId
    trips = trips.filter( trip => trip.tripId != tripId)
})

app.post('/addTrip', (req, res) => {
    const title = req.body.title
    const image = req.body.image
    const departure = req.body.departure
    const arrive = req.body.arrive

    const tripInfo = {
        title: title,
        image: image,
        departure: departure,
        arrive: arrive,
        tripId: trips.length + 1
    }

    trips.push(tripInfo)

    res.redirect('/')
})

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080')
})

