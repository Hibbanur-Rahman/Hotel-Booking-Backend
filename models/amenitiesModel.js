const mongoose=require('mongoose');

const AmenitiesSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    info:{
        type:String,
        required:true,
    },
    displayImage:{
        type:String,
        required:true,
    },
});

module.exports=mongoose.model('amenities',AmenitiesSchema);