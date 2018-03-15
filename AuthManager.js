

 var userManager = require('./UserManager');

class AuthManager{


   authenticate(req,res,next) {
       console.log(req.session);
       console.log(req.sessionID);
       console.log(userManager.getSessionId());
        if (req.session && req.sessionID === userManager.getSessionId())
           next();
        else
          return res.sendStatus(401);
    };
    
   auth(){
       return this.authenticate;
   }
    
}
   
module.exports = new AuthManager();