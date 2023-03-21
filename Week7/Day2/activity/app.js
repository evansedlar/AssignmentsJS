const express = require('express')
const app = express()
const PORT = 8080
const bcrypt = require('bcryptjs')
const pgp = require('pg-promise')()
const connectionString = 'postgres://ardsarvc:LEarv0GVJ6tDYydyeG_ZSTOEMYnyD83G@ruby.db.elephantsql.com/ardsarvc'
const db = pgp(connectionString)
app.use(express.urlencoded())


app.post('/encrypt', async(req, res) => {
    const secret = req.body.secret

    let salt = await bcrypt.genSalt(10)
    let hashedPass = await bcrypt.hash(secret, salt)

    const object = {value: hashedPass}
    console.log(JSON.stringify(object))
    res.json(object)
})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})