const mongoose = require('mongoose');
const sheetSchema = new mongoose.Schema({

    sheet:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sheet'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    permission:{
        type:String,
        default:'o'
    }

},{
    timestamps:true
});

const Sheet=mongoose.model('Sheet',sheetSchema);
module.exports=Sheet;