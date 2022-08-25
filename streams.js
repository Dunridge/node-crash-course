const fs = require('fs');

// read streams 
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// .on() - is an event listener 
// reads a chunk of data from a stream 
// readStream.on('data', (chunk) => {
//     console.log('--- NEW CHUNK ---')
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// })

// write streams

// piping
readStream.pipe(writeStream);