const fs = require('fs');

// read streams 
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8' });

// .on() - is an event listener 
// reads a chunk of data from a stream 
readStream.on('data', (chunk) => {
    console.log('--- NEW CHUNK ---')
    console.log(chunk);
    // console.log(chunk.toString());
})

// write streams