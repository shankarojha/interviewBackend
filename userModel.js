const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})

mongoose.exports = mongoose.model('User', userSchema)