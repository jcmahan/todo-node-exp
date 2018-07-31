const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db 

MongoClient.connect('mongodb://james01:mahan01@ds018238.mlab.com:18238/star-wars-quotes', { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err)
    db = client.db('star-wars-quotes')
    app.listen(3000, () => {
        console.log('Listening on 3000')
    })
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('index.ejs', {quotes, result})
    })
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/')
    })
})
