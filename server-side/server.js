const express = require('express')
const mongoose = require('mongoose')
var session = require('express-session');
var multer = require('multer')
var path = require('path')
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
    // id: 
}));
const User = require('../db/mongo');
let port = 8000
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
require("dotenv").config(); // to read .env file
const users = require("./routes/Users.js")
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
// const storage = multer.diskStorage({
//   destination: "./public/uploads/",
//   filename: function (req, file, cb) {
//     cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 11000000 },
// }).single("myImage");
// //const router = express.Router();
// app.post("/upload", function (req, res) {
// var imgurl="";
//   console.log(req.body);
//   upload(req, res, function (err) {
//     console.log(req.body.Billdata);
//     // amount:{ hospitalName:{ hospitalPhoneNumber:{ hospitalAddress:{ descAboutHealthPatient: patientPhoneNumber:{
//     // photo
//     // postedBy:{
//     // console.log("Request ---",  req.body);
//      imgurl+=req.file.path
//      console.log(imgurl)
//     console.log("Request file ---", req.file.path); //Here you get file.
//     var newBill = User
//     /*Now do where ever you want to do*/
//     if (!err) {
//       return res.send(200).end();
//     }
//   });
// // //push bill for hospitalbill array
//         // User.findOneAndUpdate(
//         //    {_id:obj.id}, 
//         //    { $push: { hospitalBill: hospitalBill  } },
//         //   function (error, success) {
//         //         if (error) {
//         //             console.log(error);
//         //         } else {
//         //             console.log(success);
//         //         }
//         //     });
//   //res.end('hi')
// });
// app.post('/bill',(req,res)=>{
//   console.log(req.body)
// })
app.get("/mayis",(req,res)=>{
  User.find({}).then(function (result) {
    console.log(result);
     res.json(result);})
})
<<<<<<< HEAD
=======

// the user can see all his posts
app.get('/mypost',(req,res)=>{
  HospitalPost.find({postedBy:req.user._id})
  .populate('postedBy',"_id userName")
  .then(mypost=>{
      res.json({mypost})
  })
  .catch(err=>{
      console.log(err)
  })
})

>>>>>>> c84096ba4c31d204c25f4cc9e2fe0cc80b26baa7
app.listen(port, () => {
  console.log("listening to port 8000");
});