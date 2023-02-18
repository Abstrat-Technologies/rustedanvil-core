const colours = require('colors')
const errorHandler = require('./src/modules/error-handler');
var errorOut = errorHandler(0, 'Something went wrong.', 'server.js');
console.log(errorOut);

var errorOut = errorHandler(1, 'Something went wrong.', 'server.js');
console.log(errorOut);

var errorOut = errorHandler(2, 'Something went wrong.', 'server.js');
console.log(errorOut);

var errorOut = errorHandler(3, 'Something went wrong.', 'server.js');
console.log(errorOut);

var errorOut = errorHandler(4, 'Something went wrong.', 'server.js');
console.log(errorOut);