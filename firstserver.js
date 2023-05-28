var server = http.createServer(function(req,res){
    var body = "Hello World";
    res.writeHead(200,{
        'Content-Length':body.length,
        'Content-type': 'text/plain'
    });
    res.end(body);
});
server.listen(3000);