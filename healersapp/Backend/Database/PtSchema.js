const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect("mongodb://localhost/collection");

const db = mongoose.connection;

db.once("open", () => {
    console.log("connection has been made");
  });

db.on("error", (error) => {
    console.log("Connection error:", error);
  });

//youmna
const foodSchema=new Schema({typeOfDisease:String,descreptionOfPrescription:String,phoneNumber:Number,img:String,video:String})
const hospitalBillSchema=new Schema({amount:Number,hospitalNumber:Number,hospitalName:String,hospitalAddress:String,img:String,video:String,descAboutHealthPatient:String})
const user=new Schema({
    userName : 
    {
        type: String,
        required: true,
    },
phoneNumber:
{ 
      type:
       Number,
    required: true
},
 email : 
 {
    type:
     String,
    required: true,
    unique: true
},
password : 
{
    type: 
    String,
    required: true,
},
food:[foodSchema],
hospitalBill:[hospitalBillSchema]
}
)
const userModel=mongoose.model('user',user)
module.exports = userModel
//
