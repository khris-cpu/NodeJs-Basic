http = require('http');
let fs = require('fs');
let uc = require('upper-case');

http.createServer((req,res) => {
    res.writeHead(200 , {'Content-Type' : 'text/html'});
    res.write(uc.upperCase('khris bharmmano')); // KHRIS BHARMMANO
}).listen(9999)