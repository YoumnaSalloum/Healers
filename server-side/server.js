const express = require('express')
const mongoose = require('mongoose')
var model = require('../db/mongo')
var path = require('path')
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

let port = 8000

app.use(bodyParser.json())
app.use(cors())
app.use (
    bodyParser.urlencoded({extended: true})
)

require('dotenv').config(); // to read .env file


const users = require ('./routes/Users.js')
app.use(users)

app.listen(port,()=>{
    console.log('listening to port 8000')
})
