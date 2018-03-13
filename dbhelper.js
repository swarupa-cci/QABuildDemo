var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

function dbConnect(){
    mongoose.connect('mongodb://127.0.0.1:27017/QADemo')
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));
}

module.exports = {
    dbConnect:dbConnect
}
