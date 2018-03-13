var UserService = require('../services/userservice')
var User = require('../models/user.js');
var Log = require('../logs.js');

class LoginController{

    registerRoutes(router){
        this.router = router;
        if(this.router != undefined){
            this.router.post('/login', this.loginUser.bind(this));
        }
       
    }


    loginUser(req,res){

       
        var userInfo = req.body;
        var username = req.body.name;
        var password = req.body.password;

        UserService.getUser(username,password,function(err,user){
             if(user != null){
                res.render("user.ejs");
             }
             else{
                res.sendStatus(401);
             }
        });
  

    }
}
module.exports = new LoginController();