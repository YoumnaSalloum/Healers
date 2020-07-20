const express = require('express')
const mongoose = require('mongoose')
//
var session = require('express-session');
var bodyParser = require('body-parser');
// //for testing
// app.get('/',function(req,res){
//     res.send("youmna")
// })
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
module.exports=users