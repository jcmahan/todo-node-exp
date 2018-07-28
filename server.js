const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
    console.log('Listening on 3000')
})

MongoClient.connect('link-to-mongodb', (err, database) => {
    
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.post('/quotes', (req, res) => {
    console.log(req.body)
})
