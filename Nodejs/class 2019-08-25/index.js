const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

const mongoose = require('mongoose');
mongoose.connect('mongodb://test123:test123@ds213178.mlab.com:13178/demo-18a', {useNewUrlParser: true});

const User = mongoose.model('User', { name: String, age : Number });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', (req, res) => {
    var q = {}
    if(req.query.name){
        q.name = req.query.name
    }
    if(req.query.age){
        q.age = req.query.age
    }
    if(req.query._id){
        q._id = req.query._id
    }
    User.find(q).then((users) => {
        console.log('meow', users)
        res.send(users)
    });
})

app.post('/users', (req, res) => {
    console.log(req.body)

    const user = new User({ name: req.body.name, age : req.body.age });
    user.save().then(() => {
        User.find().then((users) => {
            console.log('meow', users)
            res.send(users)
        });
    });
})





app.listen(port, () => console.log(`Example app listening on port ${port}!`))