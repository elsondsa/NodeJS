var EventEmitter = require('events')



var url = 'http://mylogger.io/log'

class Logger extends EventEmitter{
    log(message){
        console.log(message)
        this.emit('messagelogged',{id:1,url:'http://google.com'});
}
}

module.exports = Logger;
