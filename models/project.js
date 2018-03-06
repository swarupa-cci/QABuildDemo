var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

var projectschema = new Schema ({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    }
});

 var Project = mongoose.model("Project",projectschema);
 module.exports = Project;