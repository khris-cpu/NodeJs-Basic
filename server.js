let http = require('http');
let dt = require('./myfirstmodules');
let url = require('url');
let fs = require('fs');

http.createServer((req,res) => {
    res.writeHead(200 , {'Content-Type' : 'text/html'});
    // res.write("This Time : " + dt.myDateTime()); 
    let q = url.parse(req.url , true).query;
    let txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8000);