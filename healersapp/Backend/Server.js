const express = require('express')
const mongoose = require('mongoose')
const db = require('./Database/PtSchema')

let port = 8000

const app = express()

app.listen(port,()=>{
    console.log('listening to port 8000')
})