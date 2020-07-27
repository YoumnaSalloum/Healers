
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
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:"users"
    }
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

//creating models for the schemas
const userModel=mongoose.model('user',User,"users")
let hospital = mongoose.model("hospital", hospitalBillSchema, "allpost");
let Food = mongoose.model("Food",FoodCategoriesSchema , "allfoodpost");

let save = (users) => {};

let saveFS = () => {
  for (var i = 0; i < foodpost.length; i++) {
    var categorieOfFood = new FoodPost({
      category: foodpost[i].category,
      UserPhoneNumber: foodpost[i]. UserPhoneNumber,
      descriptionOfPrescription: foodpost[i].descriptionOfPrescription,
      photo: foodpost[i].photo,
      postedBy: foodpost[i].postedBy,
    });
    categorieOfFood.save();
  }
};

let saveHS = () => {
    for (var i = 0; i < hospitalpost.length; i++){
        var Hospost = new HospitalPost({
            amount: hospitalpost[i].amount,
            hospitalName: hospitalpost[i].hospitalName,
            hospitalAddress: hospitalpost[i].hospitalAddress,
            hospitalPhoneNumber: hospitalpost[i].hospitalPhoneNumber,
            patientPhoneNumber: hospitalpost[i].patientPhoneNumber,
            descAboutHealthPatient: hospitalpost[i].descAboutHealthPatient,
            photo:hospitalpost[i].photo,
            postedBy: hospitalpost[i].postedBy,
        })
    }
}


 

module.exports.userModel = userModel;
module.exports.hospital = hospital;
module.exports.Food = Food;
module.exports.save = save;
module.exports.saveFS = saveFS;
module.exports.saveHS = saveHS;
