
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema.Types
mongoose.connect("mongodb://localhost/collection");

const db = mongoose.connection;

db.once("open", () => {
    console.log("connection has been made");
  });

db.on("error", (error) => {
    console.log("Connection error:", error);
  });





//youmna
//const foodSchema=new Schema({typeOfDisease:String,descreptionOfPrescription:String,phoneNumber:Number,img:String,video:String})

const hospitalBillSchema=new Schema({
    amount:{
        type:Number,
        required:true
    },
    hospitalName:{
        type:String,
        required:true
    },
    hospitalPhoneNumber:{
        type:Number,
        required:true
    },
    hospitalAddress:{
         type:String,
         required:true
    },
    descAboutHealthPatient:{
        type:String,
        required:true
    },
    patientPhoneNumber:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:"no photo"
    },
    postedBy:{
        type:ObjectId,
        ref:"users"
    }
 })



 //user schema 

const User=new Schema({
    userName :{
        type: String,
        required: true,
    },
    phoneNumber:{ 
      type: Number,
    required: true
    },
    email :{
    type:String,
    required: true,
    unique: true
    },
    password :{
    type:String,
    required: true,
    },
     hospitalBill:[hospitalBillSchema],
     FoodCategories:[FoodCategoriesSchema]
})


//food category schema 
const FoodCategoriesSchema = new Schema({
    descriptionOfPrescription:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
     UserPhoneNumber:{
        type:Number,
        required:true
    },
    photo:{
        type:String,
        default:"no photo"
    },
    postedBy:{
        type:ObjectId,
        ref:"users"
    }
 })

 const userModel=mongoose.model('user',User)



module.exports = userModel