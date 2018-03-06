var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

var userschema = new Schema ({
    name:{
        type:String,
        required:true,
        unique:true
    },
    isAdmin:{
       type:Boolean,
       required:true
    }
});

 var User = mongoose.model("User",userschema);
 module.exports = User;