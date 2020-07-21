const mongoose = require('mongoose')
const express =require ('express')
//
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



const users = express.Router();
const cors = require('cors');
require('dotenv').config(); // to read .env file
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../db/mongo');

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
                let token = jwt.sign(payload, process.env.JWT_KEY+"", {
                    expiresIn: 1440
                })
                console.log(payload)
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

    var mailOptions = {
        from: 'youmna61998@gmail.com',
        to: req.body.email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
res.send("hey")

})
module.exports=users