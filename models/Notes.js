const mongoose = require('mongoose');


const UserSchema = new Schema({

    title:{
        type:String,
        required:true
    },
   
    description:{
        type:String,
        required:true,
       

    },
    tag:{
        type:String,
        default:"Genral"

    },
    date:{
        type:Date,
        default:Date.row

    },
});

module.exports=mongoose.model('note',NotesSchema)
