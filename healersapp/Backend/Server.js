const express = require('express')
const mongoose = require('mongoose')
//
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
// var path = require('path')
let port = 8000

app.use(bodyParser.json())
app.use(cors())
app.use (
    bodyParser.urlencoded({extended: true})
)
//*


require('dotenv').config(); // to read .env file
//
// //for testing
// app.get('/',function(req,res){
//     res.send("youmna")
// })

const users = require ('./routes/Users.js')
app.use(users)









//

app.listen(port,()=>{
    console.log('listening to port 8000')
})
