const loggingUtils = require('./src/modules/error-handler');
const logMsg = loggingUtils.errorHandler

const test = require('./src/modules/startup');

//test cases
logMsg(0, 'Something went wrong.', 'server.js');
logMsg(1, 'Something went wrong.', 'server.js');
logMsg(2, 'Something went wrong.', 'server.js');
logMsg(3, 'Something went wrong.', 'server.js');
logMsg(4, 'Something went wrong.', 'server.js');

//required for debug of startup functions
test