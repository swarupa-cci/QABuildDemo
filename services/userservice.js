

var mongoose = require('mongoose');
var User = require('../models/user.js');
class UserService{
    constructor(){
        this.users = [];
    }

    getUsers(callback){
        User.find(function(err,users){
             callback(err,users);
        });
       
    }

    getUser(name,password,callback){
       User.find({name:name,password:password},function(err,user){
        callback(err,user);
       })

    }

    insertUser(user,callback){

         User.create(user, function (err, user) {
               callback(err,user);
         });
    }

    updateUser(user,value,callback){
        User.update({name: user.name, password: user.password }, {$set: {sessionId: value}},function(err,user){
             callback(err,user);
        });
    }
}

module.exports = new UserService();
