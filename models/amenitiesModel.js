const mongoose=require('mongoose');

const AmenitiesSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    HotelId:{
        type: String,
        required: true,
    },
    info:{
        type:Array,
        required:true,
    },
    displayImage:{
        type:String,
        required:true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

module.exports=mongoose.model('amenities',AmenitiesSchema);