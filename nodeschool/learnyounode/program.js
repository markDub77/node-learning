// Exercise 2 of 13
/*
console.log((Number(process.argv[2]) + Number(process.argv[3])) + Number(process.argv[4]));
*/

// Exercise 3 of 13
/*
var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var newLines = str.split('\n');
console.log(newLines.length - 1);
*/


// MY FIRST ASYNC I/O! (Exercise 4 of 13)
/*
var fs = require('fs');
var finalFile = undefined;

function  string(callback) {
fs.readFile(process.argv[2],'utf8',function(err, data){
  var finalFile = data.split('\n').length - 1;
  callback();
  if (err) throw err;
});
}

function logNumber() {
  console.log(finalFile);
}

string(logNumber);

 // official solution

 // var fs = require('fs');
 // var file = process.argv[2];
 //
 // fs.readFile(file, function (err, contents) {
 // if (err) {
 // return console.log(err)
 // }
 // // fs.readFile(file, 'utf8', callback) can also be used
 // var lines = contents.toString().split('\n').length - 1
 // console.log(lines)
 // });
 */

// FILTERED LS (Exercise 5 of 13)
/*
var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err);
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
});
*/

// MAKE IT MODULAR (Exercise 6 of 13)
/*
var filterFn = require('./module.js');
var dir = process.argv[2];
var filterStr = process.argv[3];

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
});
*/

// HTTP CLIENT (Exercise 7 of 13)
/*
var http = require('http');

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error)
}).on('error', console.error);
*/

// HTTP COLLECT (Exercise 8 of 13)
/*
var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString();
    console.log(data.length);
    console.log(data)
  }))
});
*/

// JUGGLING ASYNC (Exercise 9 of 13)
/*
var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString();
      count++;

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}
*/

// TIME SERVER (Exercise 10 of 13) 
/*
var net = require('net');

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date();
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
});

server.listen(Number(process.argv[2]));
*/