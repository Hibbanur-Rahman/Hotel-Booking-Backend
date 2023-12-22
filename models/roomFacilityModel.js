const mongoose=require('mongoose');

const roomFacilitySchema= new mongoose.Schema({
    id:{
        type:String,
        required: true,
    },
    roomId:{
        type:String,
        required: true,
    },
})