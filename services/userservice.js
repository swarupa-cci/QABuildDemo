

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

    getUser(id){

    }

    insertUser(user,callback){

         User.create(user, function (err, user) {
               callback(err,user);
         });
    }

    updateUser(user){

    }
}

module.exports = new UserService();
