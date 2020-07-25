const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const HosPost = mongoose.model('HosPost')

router.get('/allpost',(req,res)=>{
    HosPost.find()
    .populate('postedBy',"_id userName")
    .then(posts=>{
        res.json({posts})
        
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/createpost',requireLogin,(req,res) =>{
    const {amount,hospitalName,hospitalPhoneNumber, hospitalAddress,descAboutHealthPatient,patientPhoneNumber,pic} = req.body
    if(!amount || !hospitalName || !hospitalPhoneNumber || !hospitalAddress || !descAboutHealthPatient || !patientPhoneNumber || !pic){
        return res.status(422).json({error:"Please add all the fields"})
    }

    const post = new Post({
        amount,
        hospitalName,
        hospitalPhoneNumber,
        hospitalAddress,
        descAboutHealthPatient,
        patientPhoneNumber,
        pic,
        postedBy:req.user   //=> to know who put this post 
    })
    post.save().then(result =>{
        res.json({post:result})
    })
    .catch(err =>{
        console.log(err)
    })
})

// the user can see all his posts
router.get('/mypost',(req,res)=>{
    HosPost.find({postedBy:req.user._id})
    .populate('postedBy',"_id userName")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })
})


module.exports = router