const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')


var users = [{
    name : "Rehan",
    id : 0
},
{
    name : "Ali",
    id : 1
}]

app.use(express.static('public1'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log("url : ", req.url)
    next()
    // res.send("res from middleware")
})

app.use("/users",(req, res, next) => {
    console.log("users url : ", req.url)
    next()
})

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/test', (req, res) => res.send(`<h1>This is test page </h1>`))

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/usersSubmit', (req, res) => {
    console.log("", req.query)
    users.push({
        name : req.query.name,
        id : Date.now()
    })
    res.json(users)
})

app.post('/users', (req, res) => {
    console.log("req body : ", req.body)
    users.push({
        name : req.body.name,
        id : Date.now()
    })
    res.send(users)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))