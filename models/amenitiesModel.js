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
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hotels",
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

module.exports=mongoose.model('amenities',AmenitiesSchema);