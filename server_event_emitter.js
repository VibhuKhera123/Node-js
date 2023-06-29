const http = require('http')

/*Genral way of crearing a server
const server = http.createServer((req,res)=>{
    res.end('Welcome')
})
*/

//using event emitter
const server = http.createServer()

server.on('request',(req,res)=>{
    res.end('Welcome')
})

server.listen(3000)