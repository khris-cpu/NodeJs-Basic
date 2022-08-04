let http = require('http');
let url = require('url');

let adr = 'http://localhost:8000.default.html?year=2022&month=July';
let q = url.parse(adr , true);

console.log(q.host); //returns localhost:8000
console.log(q.pathname);
console.log(q.search)

let qdata = q.query;

console.log(qdata.month);