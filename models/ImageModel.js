const mongoose= require('mongoose');


const imageSchema=new mongoose.Schema({
    data: Buffer,
    contentType: String,
});

const GallerySchema= new mongoose.Schema({
    name: String,
    description: String,
    images: [imageSchema],
});

module.exports=mongoose.model('Image',GallerySchema);