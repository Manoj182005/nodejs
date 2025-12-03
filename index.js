const http = require('http');

const server = http.createServer((req , res ) =>{
    res.end('welcome to nodejs server');
});

server.listen(8080,()=>{
    console.log('Response received at port 8080.');
});