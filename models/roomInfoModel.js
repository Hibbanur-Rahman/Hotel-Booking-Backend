const mongoose=require('mongoose');

const RoomInfoSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    hotelId:{
        type: String,
        required:true,
    },
    roomFacilityId:{
        type: String,
        required:true,
    },
    roomInfo:{
        type: String,
        required:true,
    },
    currentPrice:{
        type: Number,
        required:true,
    },
})


module.exports=mongoose.model('roomInfo',RoomInfoSchema);