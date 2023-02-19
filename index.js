const loggingUtils = require('./src/modules/error-handler');
const logMsg = loggingUtils.errorHandler

const test = require('./src/modules/startup');

logMsg(0, 'Something went wrong.', 'server.js');
logMsg(1, 'Something went wrong.', 'server.js');
logMsg(2, 'Something went wrong.', 'server.js');
logMsg(3, 'Something went wrong.', 'server.js');
logMsg(4, 'Something went wrong.', 'server.js');

test