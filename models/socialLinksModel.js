const mongoose= require('mongoose');

const SocialLinkScheme=new mongoose.Schema({
    id:{
        type:String,
        required: true,
    },
    HotelId:{
        type: String,
        required: true,
    },
    facebook:{
        type: String,
        required: true,
    },
    twitter:{
        type: String,
        required: true,
    },
    instagram:{
        type: String,
        required: true,
    },
    linkedin:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

module.exports=mongoose.model('socialLink',SocialLinkScheme);