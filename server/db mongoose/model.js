const mongoose =require('mongoose')
mongoose.Promise = global.Promise;

const flousiSchema = new mongoose.Schema({

    text : String , 
    number : Number,
    updatedDate: {
        type: Date,
        required: true,
        default: Date.now,
      },
    });

    const flous= mongoose.model('flousi', flousiSchema);

    module.exports = flous; 