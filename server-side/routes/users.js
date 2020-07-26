// const mongoose = require('mongoose')
// const express =require ('express')
// //
// const User = require('../../db/mongo');

// var nodemailer = require('nodemailer');
// var session = require('express-session');
// var bodyParser = require('body-parser');

// // //for testing
// // app.get('/',function(req,res){
// //     res.send("youmna")
// // })


// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'youmna61998@gmail.com',
//       pass: 'youmna1998'
//     }
//   });



// //connect the route with User.js schema 
// // const User = mongoose.model('User')
// const users = express.Router();
// const cors = require('cors');
// require('dotenv').config(); // to read .env file
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

// users.use(cors());
// users.post('/signUp', (req, res) => {

//     const userData = {
//         userName : req.body.myData.userName,
//         phoneNumber: req.body.myData.phoneNumber,
//         email: req.body.myData.email,
//         password: req.body.myData.password
//     }
//     console.log(req.body.myData)
//         User.findOne({
//             email: req.body.myData.email
//         })
//         .then(user => {
//             if(!user) {
//                 bcrypt.hash(req.body.myData.password, 10, (err, hash) => {
//                     userData.password = hash;
//                     User.create(userData)
//                     .then(user => {
//                         res.json({status: user.email + 'added'})
//                     })
//                     .catch(err=> {
//                         res.send('error: ' + err)
//                     })
//                 })

//             } else {
                        
//                  res.json({error: 'email already exist'})
//             }
//         })
//         .catch(res => {
//             res.send('error: ' + err)
//         })
//     // }
//     // else{console.log("error")}
// })
// var obj={}
// var obj2={email:''}
// users.post('/login', (req, res) => {
  
//     User.findOne({
//         email: req.body.myData.email
//     })
//     .then(user => {
//         if(user) {
//             if(bcrypt.compareSync(req.body.myData.password, user.password)) {
//                 req.session.loggedin = true;

//                     //  req.session.name = results[0].name;
//                 const payload = {
//                     _id: user._id,
//                     password: user.password,
//                     email: user.email
//                 }
//                 obj.id = user._id 
//                 obj2.email=user.email
//                 // console.log( obj.id  )
//                 let token = jwt.sign(payload, process.env.JWT_KEY+"", {
//                     expiresIn: 1440
//                 })
//                 // console.log(payload)
//                 res.send(token)
//             } else {
//                 res.json({error: "User dose not exist"})
//             }
//         } else {
//             res.json({error: "User dose not exist"})
//         }
//         // console.log(process.env.JWT_KEY)
//     })
//     .catch(err => {
//         res.send('error: ' + err)
//     })
// })
// users.get('/logout', (request, response) => {
//     console.log('Destroying session');
//     request.session.destroy();
//     response.send({ result: 'OK', message: 'Session destroyed' });
// });

// users.post('/send',(req,res)=>{
//     var bill = {amount:900,hospitalName:'lol0'}
//     var bill2 = {amount:0,hospitalName:'youmna'}

//    var payment=req.body.payment
//    var selected=req.body.selected
//    var feed=req.body.feed

//     // User.findByIdAndUpdate({id:"5f15c9d9e4a194183f0ac89a"}).then(function(result){
//         // console.log(result)
//         // result[0].hospitalBill.push(bill)
//         // result[1].hospitalBill.push(bill2)
//         //  User.findByIdAndUpdate(
//         //     { _id: "5f15c9d9e4a194183f0ac89a" },
//         //     {
//         //       $push: {
//         //         hospitalBill: {
//         //             amount:0,hospitalName:"sahar"
//         //         }
//         //       }
//         //     },
//         //     { new: true, useFindAndModify: false }
//         //   );
//         // var x={payment:req.body.payment,selected:req.body.selected,feed:req.body.feed}
//         var hospitalBill = {  amount:0,hospitalName:"testing with obj.id for amneh"};
//         // console.log(obj.id)
//         User.findByIdAndUpdate({_id:obj.id}).then(function(result){
//         // console.log(result)
//         // console.log(typeof(result))

//         // //push bill for hospitalbill array
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
//         // console.log(obj2.email)
        
//         console.log(result.hospitalBill[0].amount)
//         //>>r[i]>>[ob,ob]
//         console.log("youmna "+result)
//         // for(var i in result){
//             // console.log("youmna "+result[i])
//             if(result.hospitalBill[0].amount===0){
//                 // console.log("inside if amount")
//                 var mailOptions = {
//                     from: 'youmna61998@gmail.com',
//                     to:obj2.email,
//                     subject: 'Sending Email using Node.js',
//                     text:'someone pay for you '+payment+' $'+' and the way of payment is '+selected+' and the feedback is : '+feed
//                   };
//                   //
//                   transporter.sendMail(mailOptions, function(error, info){
//                     if (error) {
//                       console.log(error);
//                     } else {
//                       console.log('Email sent: ' + info.response);
//                     }
//                });

//             }//if
//             // else{console.log("amount is not 0")}
//             // }//for loop
//         // console.log(result)
//     //   res.send(result[0].hospitalBill)
 
    
        
//         res.send('youmna send: ')
//         })
//    })

// // res.send("hey")


// module.exports=users
const mongoose = require('mongoose')
const express =require ('express')
//
var path = require('path')
const User = require('../../db/mongo');
var multer = require('multer')
var nodemailer = require('nodemailer');
var session = require('express-session');
var bodyParser = require('body-parser');
// //for testing
// app.get('/',function(req,res){
//     res.send("youmna")
// })
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youmna61998@gmail.com',
      pass: 'youmna1998'
    }
  });
//connect the route with User.js schema
// const User = mongoose.model('User')
const users = express.Router();
const cors = require('cors');
require('dotenv').config(); // to read .env file
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
users.use(cors());
users.post('/signUp', (req, res) => {
    const userData = {
        userName : req.body.myData.userName,
        phoneNumber: req.body.myData.phoneNumber,
        email: req.body.myData.email,
        password: req.body.myData.password
    }
    console.log(req.body.myData)
        User.findOne({
            email: req.body.myData.email
        })
        .then(user => {
            if(!user) {
                bcrypt.hash(req.body.myData.password, 10, (err, hash) => {
                    userData.password = hash;
                    User.create(userData)
                    .then(user => {
                        res.json({status: user.email + 'added'})
                    })
                    .catch(err=> {
                        res.send('error: ' + err)
                    })
                })
            } else {
                 res.json({error: 'email already exist'})
            }
        })
        .catch(res => {
            res.send('error: ' + err)
        })
    // }
    // else{console.log("error")}
})
var store;
var obj={}
var obj2={email:''}
users.post('/login', (req, res) => {
    User.findOne({
        email: req.body.myData.email
    })
    .then(user => {
        if(user) {
            if(bcrypt.compareSync(req.body.myData.password, user.password)) {
                req.session.loggedin = true;
                    //  req.session.name = results[0].name;
                const payload = {
                    _id: user._id,
                    password: user.password,
                    email: user.email
                }
                obj.id = user._id
                obj2.email=user.email
                store=req.body.myData.id
                // console.log( obj.id  )
                let token = jwt.sign(payload, process.env.JWT_KEY+"", {
                    expiresIn: 1440
                })
                // console.log(payload)
                res.send(token)
            } else {
                res.json({error: "User dose not exist"})
            }
        } else {
            res.json({error: "User dose not exist"})
        }
        // console.log(process.env.JWT_KEY)
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})
users.get('/logout', (request, response) => {
    console.log('Destroying session');
    request.session.destroy();
    response.send({ result: 'OK', message: 'Session destroyed' });
});
users.post('/send',(req,res)=>{
    var bill = {amount:900,hospitalName:'lol0'}
    var bill2 = {amount:0,hospitalName:'youmna'}
   var payment=req.body.payment
   var selected=req.body.selected
   var feed=req.body.feed
    // User.findByIdAndUpdate({id:"5f15c9d9e4a194183f0ac89a"}).then(function(result){
        // console.log(result)
        // result[0].hospitalBill.push(bill)
        // result[1].hospitalBill.push(bill2)
        //  User.findByIdAndUpdate(
        //     { _id: "5f15c9d9e4a194183f0ac89a" },
        //     {
        //       $push: {
        //         hospitalBill: {
        //             amount:0,hospitalName:"sahar"
        //         }
        //       }
        //     },
        //     { new: true, useFindAndModify: false }
        //   );
        // var x={payment:req.body.payment,selected:req.body.selected,feed:req.body.feed}
        var hospitalBill = {  amount:0,hospitalName:"testing with obj.id for amneh"};
        // console.log(obj.id)
        User.findByIdAndUpdate({_id:obj.id}).then(function(result){
        // console.log(result)
        // console.log(typeof(result))
        // //push bill for hospitalbill array
        // User.findOneAndUpdate(
        //    {_id:obj.id},
        //    { $push: { hospitalBill: hospitalBill  } },
        //   function (error, success) {
        //         if (error) {
        //             console.log(error);
        //         } else {
        //             console.log(success);
        //         }
        //     });
        // console.log(obj2.email)
        console.log(result.hospitalBill[0].amount)
        //>>r[i]>>[ob,ob]
        console.log("youmna "+result)
        // for(var i in result){
            // console.log("youmna "+result[i])
            if(result.hospitalBill[0].amount===0){
                // console.log("inside if amount")
                var mailOptions = {
                    from: 'youmna61998@gmail.com',
                    to:obj2.email,
                    subject: 'Sending Email using Node.js',
                    text:'someone pay for you '+payment+' $'+' and the way of payment is '+selected+' and the feedback is : '+feed
                  };
                  //
                  transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
               });
            }//if
            // else{console.log("amount is not 0")}
            // }//for loop
        // console.log(result)
    //   res.send(result[0].hospitalBill)
        res.send('youmna send: ')
        })
   })
// res.send("hey")
const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function (req, file, cb) {
      cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    },
  });
  const upload = multer({
    storage: storage,
    limits: { fileSize: 11000000 },
  }).single("myImage");
  //const router = express.Router();
  users.post("/upload", function (req, res) {
  var imgurl="";
    console.log(req.body);
    upload(req, res, function (err) {
      var hosBill = JSON.parse(req.body.Billdata);
      console.log(hosBill.amount)
      // console.log("Request ---",  req.body);
      console.log(obj.id)
       imgurl+=req.file.path
       console.log(imgurl)
      console.log("Request file ---", req.file.path); //Here you get file.
      console.log(hosBill.id)
    //push bill for hospitalbill array
    // amount:{ hospitalName:{ hospitalPhoneNumber:{ hospitalAddress:{ descAboutHealthPatient: patientPhoneNumber:{
      // photo
    //   var bill = {
    //     amount: $("#amount").val(),
    //     hospitalNumber: $("#hosNum").val(),
    //     hospitalName: $("#hosName").val(),
    //     hospitalAddress: $("#hosAdress").val(),
    //     descAboutHealthPatient: $("#healthDes").val(),
    //     patientNumber
    //     feedBack: $("#feed").val(),
    //   };
      // postedBy:{
          User.findOneAndUpdate(
             {_id:obj.id},
             { $push: { hospitalBill:{amount:hosBill.amount,hospitalName:hosBill.hospitalName,
                hospitalPhoneNumber:hosBill.hospitalNumber,hospitalAddress:hosBill.hospitalAddress,
                descAboutHealthPatient:hosBill.descAboutHealthPatient,patientPhoneNumber:hosBill.patientNumber,photo:imgurl
            } } },
            function (error, success) {
                  if (error) {
                      console.log(error);
                  } else {
                      console.log(success);
                  }
              });
      /*Now do where ever you want to do*/
      if (!err) {
        return res.send(200).end();
      }
    });
  // //push bill for hospitalbill array
          // User.findOneAndUpdate(
          //    {_id:obj.id},
          //    { $push: { hospitalBill: hospitalBill  } },
          //   function (error, success) {
          //         if (error) {
          //             console.log(error);
          //         } else {
          //             console.log(success);
          //         }
          //     });
    //res.end('hi')
  });
module.exports=users