var fs = require('fs');

var filename = process.argv[2];
//console.log(filename);

//var fileBuf = fs.readFileSync(filename);
//var fileContent = fileBuf.toString();

var fileContent = fs.readFileSync(filename, 'utf8'); // Just get back a string directly
var numNewLines = fileContent.split('\n').length - 1; // Do not include the last line
console.log(numNewLines);
