

const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const app = express()

app.use(cors())
app.use(express.json())

const users = [ { username: 'evansedlar', password: 'password' } ]

app.post('/api/login', (req, res) => {

    const username = req.body.username
    const password = req.body.password

    const user = users.find(user => user.username == username && user.password == password)

    if ( user ) {

        const token = jwt.sign({username: user.username}, 'SECRETKEY')

        res.json({success: true, token: token})

    } else {

        res.json({success: false, message: 'Unable to authenticate'})

    }

})


app.listen(8080, () => {
    console.log('Server is running...')
})