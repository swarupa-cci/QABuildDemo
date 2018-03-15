var UserService = require('../services/userservice')
var User = require('../models/user.js');
var Log = require('../logs.js');
var AuthManager = require('../AuthManager');
class UserController{
  
    
    
    registerRoutes(router){
        this.router = router;
        if(this.router != undefined){
            this.router.get('/users', AuthManager.auth(), this.getUsers.bind(this));
            this.router.get('/users/:id', AuthManager.auth(),this.getSingleUser.bind(this));
            this.router.post('/users', AuthManager.auth(), this.postUser.bind(this));
            this.router.put('/users/:id', AuthManager.auth(),this.putUser.bind(this));
            
        }
       
    }

    getUsers(req, res) {

        var users = UserService.getUsers
        res.send(users);
    }
 
    getSingleUser(req, res) {
        var id = req.params.id;
        var user = UserService.getSingleUser(id);
 
        if (!user) {
            res.sendStatus(404);
        } else {
            res.send(user);
        }
    }
 
    putUser(req, res) {
        var id = parseInt(req.params.id, 10);
        var existingUser = UserService.getSingleUser(id);
 
        if (!existingUser) {
            let userInfo = req.body;
            userInfo.id = id;
            if (UserService.insertUser(userInfo)) {
                res.setHeader('Location', '/users/' + id);
                res.sendStatus(201);
            } else {
                res.sendStatus(500);
            }
        } else {
            if (UserService.updateUser(id, req.body)) {
                res.sendStatus(204);
            } else {
                res.sendStatus(404);
            }
        }
    }
 
    postUser(req, res) {
        var userInfo = req.body;

        var username = req.body.name;
        var password = req.body.password;
        var isAdmin = req.body.isAdmin;
        var user = new User(req.body);

        UserService.insertUser(user, function(err,user,next){
            if(!err){
                UserService.getUsers(function(err,users){
                    Log.logMessage(users);
                    if(!err){
                     res.sendStatus(200);
                    }
                    else{
                     res.sendStatus(500);
                    }
                });
 
            }
            else{
                res.sendStatus(500);
            }
            
        });

    }
}

module.exports = new UserController();