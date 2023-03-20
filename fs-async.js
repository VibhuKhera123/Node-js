const {readFile,writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        return console.log(err);
    }
    //console.log(result);
    const first = result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            return console.log(err);
        }
        const second = result
        writeFile('./content/result-async.txt',`This is the result:\n${first}\n${second}`,(err,result)=>{
            if (err) {
                return console.log(err);
            }
            console.log(result);
        })
    })    
})