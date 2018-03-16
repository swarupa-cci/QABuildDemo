var sessionId;

class UserManager{
    
    setSessionId(sessionId){
        this.sessionId = sessionId;
    }

    getSessionId(){
        return this.sessionId;
    }
}

module.exports = new UserManager();