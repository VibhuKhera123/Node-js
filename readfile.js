const {readFile}=require('fs');
const { result } = require('lodash');

console.log('start first task');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log('first task completed');
})

console.log('start second task');