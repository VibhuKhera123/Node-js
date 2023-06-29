const {readFile,writeFile} = require('fs');
const util = require('util');
const readfilePromise = util.promisify(readFile)
const writefilePromise = util.promisify(writeFile)


const start = async() =>{
    try{
        const first  = await readfilePromise('../content/first.txt','utf8')
        const second  = await readfilePromise('../content/second.txt','utf8')
        await writefilePromise('../content/result-mind.txt',`this is the result for asyc with await without blocking:${first}\n${second}`)
        console.log(first);
        console.log(second);
    }
    catch(error){
        console.log(error);
    }
}

start()

// const getText =  (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                reject(err)
//             }
//             else{
//                 resolve(data)
//             }
//         } )
//     })
// }


//getText('./content/first.txt').then(result => console.log(result)).catch(err => console.log(err))