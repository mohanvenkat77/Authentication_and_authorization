const mongoose = require('mongoose')
const UserSchema=new mongoose.Schema({
    login:{
        type:String
    },
    password:{
        type:String
    }
})

module.exports=mongoose.model('User', UserSchema)