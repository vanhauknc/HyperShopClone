const express = require('express');
var bodyParser = require('body-parser')
const dotenv = require('dotenv').config()



const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send('Hello World')
})
require('./routes')(app);


app.listen(port,()=>{
    console.log('App Run port '+process.env.PORT)
})