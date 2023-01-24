const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    username: {type:String,required:true},

   email: {type:String,required:true},

   password: {type:String,required:true},

   age: {type:Number},

tel :{type : string},

admin : {type:Boolean}


})

module.exports = mongoose.model('User', UserSchema)










