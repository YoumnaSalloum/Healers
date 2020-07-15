const express = require('express')
const mongoose = require('mongoose')
//
// //for testing
// app.get('/',function(req,res){
//     res.send("youmna")
// })
const users = express.Router();
const cors = require('cors');
require('dotenv').config(); // to read .env file
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../Database/PtSchema');
users.use(cors());
users.post('/signUp', (req, res) => {
    const userData = {
        userName : req.body.userName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        password: req.body.password
    }
        User.findOne({
            email: req.body.email
        })
        .then(user => {
            if(!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
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