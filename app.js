/*const logger = require('./logger')

logger.log('Hello world');

const path = require('path');

var pathobj = path.parse(__filename);

console.log(pathobj);

const os = require('os');

var totalmem = os.totalmem();

var freemem = os.freemem();

console.log(`Total memory is ${totalmem} and Free memory is ${freemem}`);

const fs = require('fs')

fs.readdir('./',function(err,files){
    if(err) console.log('Error found',err);
    else console.log(files);
})
*/

/*var EventEmitter = require('events')

const Logger = require('./logger')
var logger = new Logger()

logger.on('messagelogged',function(arg){
    console.log('Listener called',arg)
})

logger.log('message')*/

const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.write('hello world');
        res.end();
    }

    if(req.url === '/api/courses') {
        res.write('Bangalore')
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }

});

server.listen(3001);

console.log('Listening at port 3000');
