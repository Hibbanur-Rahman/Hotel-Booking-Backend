const mongoose=require('mongoose');

const HotelServiceSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    hotelId:{
        type: String,
        required:true,
    },
    amenitiesId:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    }

});

module.exports=mongoose.model('hotelService',HotelServiceSchema);