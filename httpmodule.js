const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.write("This is the first response.\nWelcome to my server.")
        res.end()
    }
    if (req.url === '/about') {
        
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Page not found</h1>
    <a href = "/">back to home</a> 
    `)
    
})

server.listen(5000)