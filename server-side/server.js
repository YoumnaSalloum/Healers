
const express = require("express");
const mongoose = require("mongoose");
var session = require("express-session");
var model = require("../db/mongo");
var path = require("path");
var cors = require("cors");
var bodyParser = require("body-parser");
var multer = require("multer");

const express = require('express')
const mongoose = require('mongoose')
var session = require('express-session');

var path = require('path')
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(
  session({
    secret: "secret",
    resave: true,

    saveUninitialized: true,
    // id: 0
  })
);
const User = require("../db/mongo");

let port = 8000;
    saveUninitialized: true
    // id: 
}));

const User = require('../db/mongo');

let port = 8000


app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

require("dotenv").config(); // to read .env file


const users = require("./routes/Users.js");
app.use(users);
app.get("/select", function (req, res) {
  var bill2 = { amount: 900, hospitalName: "lol0" };
  User.find({}).then(function (result) {
    // console.log(result[0].hospitalBill.push(bill))
    console.log(result[0].hospitalBill.push(bill2));
    console.log(result[0].hospitalBill);
    console.log(result);
    res.send(result[0].hospitalBill);
  });
});

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});

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

const upload = multer({
  storage: storage,
  limits: { fileSize: 11000000 },
}).single("myImage");
//const router = express.Router();
app.post("/upload", function (req, res) {
  console.log(req.body);
  upload(req, res, function (err) {
    console.log(req.body);
   
    // console.log("Request ---",  req.body);
    console.log("Request file ---", req.file.path); //Here you get file.
    /*Now do where ever you want to do*/

    if (!err) {
      return res.send(200).end();
    }
  });

  //res.end('hi')
});


// app.post('/bill',(req,res)=>{

//   console.log(req.body)
// })

app.get("/mayis",(req,res)=>{
  User.find({}).then(function (result) {
    console.log(result[0].hospitalBill);
    console.log(result);
    res.send(result);})
})

app.listen(port, () => {
  console.log("listening to port 8000");
});
