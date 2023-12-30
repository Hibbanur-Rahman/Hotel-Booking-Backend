const mongoose=require('mongoose');

const MenuItemsSchema= new mongoose.Schema({
    Id:{
        type:Number,
        required: true,
    },
    HotelId:{
        type: Number,
        required: true,
    },
    ItemName:{
        type: String,
        required: true,
    },
    ItemCategory:{
        type: String,
        required: true,
    },
    ItemPrice:{
        type: Number,
        required: true,
    },
    ItemDescription:{
        type: String,
        required: true,
    },
})

module.exports=mongoose.model('MenuItems',MenuItemsSchema);