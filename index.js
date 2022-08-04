let http = require('http');
let fs = require('fs');

http.createServer((req,res) => {
    fs.readFile('index.html' , (err,data) => {
        res.writeHead(200 , {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(2022);

// Create File

// fs.appendFile('mynewfile.txt' , 'Hello , World' , (err) => {
//     if (err) throw err;
//     console.log('Saved!');
// });

// Open File

// fs.open('mynewfile2.txt' , 'w' , (err,file) => {
//     if (err) throw err;
//     console.log('Saved!');
// })

// Write File

// fs.writeFile('mynewfile3.txt' , 'This is Replace new file 3' , (err) => {
//     if (err) throw err;
//     console.log('Saved!');
// });

// Update File

// fs.appendFile('mynewfile3.txt' , 'This is Update Text' , (err) => {
//     if (err) throw err;
//     console.log('Saved!');
// })

// Rename File

// fs.rename('mynewfile2.txt' , 'myrenamefile' , (err) => {
//     if (err) throw err;
//     console.log("Rename!");
// });
