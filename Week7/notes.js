//Back end registration and login for your website
//Create a table in beekeeper studio for your users that holds their username and password

app.post('/register', async(req, res) => {
    const username = req.body.username
    const password = req.body.password
    
    //create salt
    let salt = await bcrypt.genSalt(10)
    //create the hashed password
    let hashedPassword = await bcrypt.hash(password, salt)

    await db.none('INSERT INTO users(username, password) VALUES($1, $2)', [username, hashedPassword])
    //take the user to the login screen
    res.redirect('/')
})


//login
app.post('/login', async(req, res) => {
    const username = req.body.username
    const password = req.body.password

    db.oneOrNone('SELECT if, username, password FROM users WHERE username = $1', [username])

    if(user) {
        const result = await bcrypt.compare(password, user.password)
        if(result) {
            //user has been authenticated
            //put something in the session
            if(req.session) {
                req.session.userId = user.id
            }
            //send them to the home screen 
            res.redirect('/')

        } else {
            res.render('login', {errorMessage:'Invalid credentials.'})
        }
    } else {
        res.render('login', {errorMessage: "Invalid credentials."})
    }

})
//in order to encyrypt your users password you must install bcryptjs
var bcryptjs = require('bcryptjs')

//CRUD Operations: Create, Read, Update, and Delete



//Joining two different tables
//SELECT users.id, username, name, year from users
//JOIN movies on users.id = movies.user_id


// How to get all movies added by a user
// SELECT id, name, year, user_id FROM users WHERE user_id = 2


//Active record pattern, ORM, TABLES
let customers = new Customer()
customers.first_name = 'John'
customers.save()
