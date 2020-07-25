const express = require('express')
const mongoose = require('mongoose')
var session = require('express-session');

var path = require('path')
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
    // id: 
}));

const User = require('../db/mongo');

let port = 8000

app.use(bodyParser.json())
app.use(cors())
app.use (
    bodyParser.urlencoded({extended: true})
)

require('dotenv').config(); // to read .env file

// const users = require ('./routes/Users.js')

// app.use(users)
app.get('/select',function(req,res){
    var bill2 = {amount:900,hospitalName:'lol0'}
    var bill = {amount:0,hospitalName:'youmna'}

    User.find({}).then(function(result){
        
        // console.log(result[0].hospitalBill.push(bill))
        console.log(result[0].hospitalBill.push(bill2))
        console.log(result[0].hospitalBill)
        console.log(result)
      res.send(result[0].hospitalBill)

})
    })
    //use routers 
    // app.use('/foodCategories',FoodPostRouter)
    // app.use('/HospitalPost', HospitalPostRouter)

app.listen(port,()=>{
    console.log('listening to port 8000')
})
