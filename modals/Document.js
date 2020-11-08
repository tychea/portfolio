const mongoose = require('mongoose');
const DocumentSchema = new mongoose.Schema({
    documentTitle:{
        type: String,
        trim:true,
        required: [true, 'Doucment Title is required'],
        trim:true
    },
    documentNumber:{
        type:String,
        trim:true,
    },
    documentOrigin:{
        type:String,
        trim:true,
        required:[true, 'Document Origin is required']
    },
    dateReceiveDocument:{
        type:Date,
        
        default:Date.now
    },
    dateReleaseDocument:{
        type:Date
    },
    documentReceiver:{
        type:String,
        trim:true
    },
    documentVerifyBack:{
        type:Boolean,
        trim:true,
        default:false
    }

})

const Document = mongoose.model('documents',DocumentSchema);
module.exports = Document ;