const fs = require("fs");

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(data); // <Buffer >
//     console.log(data.toString()); // <Buffer >
// })

// console.log('last line');

// // writing files
// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//     console.log('file was written')
// });

// fs.writeFile('./docs/blog2.txt', 'hello, again', () => { // it creates a new one if the previous one doesn't exist
//     console.log('file was written')
// });

// directories
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }

    console.log('Folder created');
  });
} else {
    fs.rmdir('./assets', (err) => {
        console.log(err);
    });
    console.log('folder deleted');
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    console.log('file exists');
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('File deleted');
    })
}