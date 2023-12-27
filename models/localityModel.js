const mongoose=require('mongoose');

const LocalitySchema=new mongoose.Schema({
    localityId:{
        type:String,
        required:true,
    },
    lattitude:{
        type: Number,
        required: true,
    },
    longitude:{
        type: Number,
        required: true,
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pin:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    website:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

module.exports=mongoose.model('locality',LocalitySchema);