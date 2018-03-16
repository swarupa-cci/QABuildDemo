
 var winston = require('winston');
 var logger;
 class logs{
    
      constructor(){
        this.logger = new (winston.Logger)({
            transports: [
              new (winston.transports.Console)(),
              new (winston.transports.File)({ filename: 'test.log' })
            ]
          });
      }
      
       logMessage(message){
        this.logger.log('info', JSON.stringify(message));
        //logger.info('Hello again distributed logs');
    }
  }



  
module.exports = new logs();