let os=require('os');
const path = require('path');
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.release());
console.log(os.platform());
console.log(os.type());

console.log(path.basename('F:\WORK\Office Web Developement\Node Practice\index.js'));
console.log(path.dirname('F:\WORK\Office Web Developement\Node Practice\index.js'));

// var http = require('http');
// var date=require('./myownmodues');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end(`THE DATE IS ${date.myDateTime()}`);
// }).listen(8080);




var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);

console.log(__dirname); // Directory of the current module
console.log(__filename); // File path of the current module


console.log(process.env.basename); // Access environment variables
              

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, HTTP Server!');
});

const port = 3000;
// console.log(server.listen(port, () => {
//   console.log(`HTTP server is listening on port ${port}`);
// }));
