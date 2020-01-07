// FILE SYSTEM MODULE
const fs = require('fs');
const path = require('path'); // path module

// Create folder 'test'
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if (err) throw err;
//   console.log('Folder created');
// });

// Create and write to file 'hello.txt'
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello World!',
//   err => {
//     if (err) throw err;
//     console.log('File written to...');

//     // append to file 'hello.txt'
//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       '\nI Love Node.js',
//       err => {
//         if (err) throw err;
//         console.log('File written to...');
//       }
//     );
//   }
// );

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename file 'hello.txt' to 'helloworld.txt'
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  err => {
    if (err) throw err;
    console.log('File renamed...');
  }
);
