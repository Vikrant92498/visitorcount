const mongoose = require('mongoose')
const visitCounter = new mongoose.Schema({
    count:{
        type:String,
        required:true,
        default:"0"
    }
})
const counter = mongoose.model('visit', visitCounter);

module.exports = counter;
//9jw1lTA4gpyz7FXF