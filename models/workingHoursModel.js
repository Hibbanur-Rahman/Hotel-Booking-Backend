const mongoose= require('mongoose');

const WorkingHoursSchema=mongoose.Schema({
    Monday:[
        {
            opening:String,
            closing:String,
        },
    ],
    Tuesday:[
        {
            opening:String,
            closing:String,
        },
    ],
    Wednesday:[
        {
            opening:String,
            closing:String,
        },
    ],
    Thursday:[
        {
            opening:String,
            closing:String,
        },
    ],
    Friday:[
        {
            opening:String,
            closing:String,
        },
    ],
    Saturday:[
        {
            opening:String,
            closing:String,
        },
    ],
    Sunday:[
        {
            opening:String,
            closing:String,
        },
    ],
    createdAt:{
        type:Date,
        default: new Date.now,
    }
    
});

module.exports=mongoose.model('WorkingHours',WorkingHoursSchema);