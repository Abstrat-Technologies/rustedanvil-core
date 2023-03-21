const loggingUtils = require('./src/modules/error-handler');
const logMsg = loggingUtils.errorHandler

const loggingPath = require('path');
const curFile = loggingPath.basename(__filename);

const test = require('./src/modules/startup');

//test cases
logMsg(0, 'Something went wrong.', curFile);
logMsg(1, 'Something went wrong.', curFile);
logMsg(2, 'Something went wrong.', curFile);
logMsg(3, 'Something went wrong.', curFile);
logMsg(4, 'Something went wrong.', curFile);

//required for debug of startup functions
test