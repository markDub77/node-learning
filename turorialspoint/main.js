// https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm

// Blocking Code Example
/*
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program Ended");
*/

// Non-Blocking Code Example
/*
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log("Program Ended");
*/

// Synchronous vs Asynchronous
/*
var fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
*/

// Reading from a Stream
/*
var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
  data += chunk;
});

readerStream.on('end',function(){
  console.log(data);
});

readerStream.on('error', function(err){
  console.log(err.stack);
});

console.log("Program Ended");
*/

// Writing to a Stream
// https://www.tutorialspoint.com/nodejs/nodejs_streams.htm
/*
var fs = require("fs");
var data = 'Simply Easy Learning';

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
  console.log("Write completed.");
});

writerStream.on('error', function(err){
  console.log(err.stack);
});

console.log("Program Ended");
*/

// Piping the Streams
/*
var fs = require("fs");

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");
*/

// Chaining the Streams
/*
var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

console.log("File Compressed.");
*/

// Synchronous vs Asynchronous
/*
var fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
*/

// Open a File
/*
var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("File opened successfully!");
});
*/

// Get File Information
/*
var fs = require("fs");

console.log("Going to get file info!");
fs.stat('input.txt', function (err, stats) {
  if (err) {
    return console.error(err);
  }
  console.log(stats);
  console.log("Got file info successfully!");

  // Check file type
  console.log("isFile ? " + stats.isFile());
  console.log("isDirectory ? " + stats.isDirectory());
});
*/

// Writing a File
/*
var fs = require("fs");

console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning!',  function(err) {
  if (err) {
    return console.error(err);
  }

  console.log("Data written successfully!");
  console.log("Let's read newly written data");
  fs.readFile('input.txt', function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
  });
});
*/

// Reading a File
/*
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("File opened successfully!");
  console.log("Going to read the file");
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
    if (err){
      console.log(err);
    }
    console.log(bytes + " bytes read");

    // Print only read bytes to avoid junk.
    if(bytes > 0){
      console.log(buf.slice(0, bytes).toString());
    }
  });
});
*/

// Closing a File
/*
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("File opened successfully!");
  console.log("Going to read the file");

  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
    if (err){
      console.log(err);
    }

    // Print only read bytes to avoid junk.
    if(bytes > 0){
      console.log(buf.slice(0, bytes).toString());
    }

    // Close the opened file.
    fs.close(fd, function(err){
      if (err){
        console.log(err);
      }
      console.log("File closed successfully.");
    });
  });
});
*/

// Truncate a File
/*
var fs = require("fs");
var buf = new Buffer(1024);

console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("File opened successfully!");
  console.log("Going to truncate the file after 10 bytes");

  // Truncate the opened file.
  fs.ftruncate(fd, 10, function(err){
    if (err){
      console.log(err);
    }
    console.log("File truncated successfully.");
    console.log("Going to read the same file");

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
        console.log(err);
      }

      // Print only read bytes to avoid junk.
      if(bytes > 0){
        console.log(buf.slice(0, bytes).toString());
      }

      // Close the opened file.
      fs.close(fd, function(err){
        if (err){
          console.log(err);
        }
        console.log("File closed successfully.");
      });
    });
  });
});
*/

// Delete a File
/*
var fs = require("fs");

console.log("Going to delete an existing file");
fs.unlink('input.txt', function(err) {
  if (err) {
    return console.error(err);
  }
  console.log("File deleted successfully!");
});
*/

// Create a Directory
/*
var fs = require("fs");

console.log("Going to create directory /test");
fs.mkdir('./test', function(err) {
  if (err) {
    return console.error(err);
  }
  console.log("Directory created successfully!");
});
*/

// Read a Directory
/*
var fs = require("fs");

console.log("Going to read directory ./test");
fs.readdir("./test/",function(err, files){
  if (err) {
    return console.error(err);
  }
  files.forEach( function (file){
    console.log( file );
  });
});
*/

// Remove a Directory
/*
var fs = require("fs");

console.log("Going to delete directory ./test");
fs.rmdir("./test",function(err){
  if (err) {
    return console.error(err);
  }
  console.log("Going to read directory /tmp");

  fs.readdir("/tmp/",function(err, files){
    if (err) {
      return console.error(err);
    }
    files.forEach( function (file){
      console.log( file );
    });
  });
});
*/

// __filename
// Let's try to print the value of
/*
console.log( __filename );
*/

// __dirname
// Let's try to print the value of __dirname
/*
console.log( __dirname );
*/

// setTimeout(cb, ms)
/*
function printHello(){
  console.log( "Hello, World!");
}
// Now call above function after 2 seconds
setTimeout(printHello, 2000);
*/

// clearTimeout(t)
/*
function printHello(){
  console.log( "Hello, World!");
}

// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);

// Now clear the timer
clearTimeout(t);
*/

// setInterval(cb, ms)

function printHello(){
  console.log( "Hello, World!");
}
// Now call above function after 2 seconds
setInterval(printHello, 2000);



