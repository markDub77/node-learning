// Creating Web client using Node
// https://www.tutorialspoint.com/nodejs/nodejs_web_module.htm
// run: node server.js before running this
// run thin from a different command terminal other than server.js to see the result

var http = require('http');

// Options to be used by request 
var options = {
  host: 'localhost',
  port: '8081',
  path: '/parts/index.htm'
};

// Callback function is used to deal with response
var callback = function(response){
  // Continuously update stream with data
  var body = '';
  response.on('data', function(data) {
    body += data;
  });

  response.on('end', function() {
    // Data received completely.
    console.log(body);
  });
};

// Make a request to the server
var req = http.request(options, callback);
req.end();
