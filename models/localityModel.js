const mongoose=require('mongoose');

const LocalitySchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    countryCode:{
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
});

module.exports=mongoose.model('locality',LocalitySchema);