const mongoose=require('mongoose');

const RoomAvailabilitySchema= new mongoose.Schema({
    roomId:{
        type:String,
        required:true,
    },
    fromDate:{
        type:Date,
        required:true,
    },
    toDate:{
        type: Date,
        required: true,
    },
    numberOfRooms:{
        type: Number,
        required: true,
    }
});


module.exports= mongoose.model('roomAvailability',RoomAvailabilitySchema);
