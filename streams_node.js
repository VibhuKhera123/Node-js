/*STREAMS
Writable->write data sequentially
Readable->read data sequentially
Duplex -> read and write data 
Transform->modifying data
*/

const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt','utf-8');
stream.on('data',(result)=>{
    console.log(result);
})