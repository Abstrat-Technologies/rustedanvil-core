const loggingUtils = require('./src/modules/error-handler');
const logMsg = loggingUtils.consoleOut

const loggingPath = require('path');
const curFile = loggingPath.basename(__filename);

const loader = require('./src/modules/loader')

//test cases
// logMsg(0, 'Something went wrong.', curFile);
// logMsg(1, 'Something went wrong.', curFile);
// logMsg(2, 'Something went wrong.', curFile);
// logMsg(3, 'Something went wrong.', curFile);
// logMsg(4, 'Something went wrong.', curFile);

//required for debug of startup functions
loader

//PLEASE REPLACE THIS WITH A CALL TO THE MODULE LOADER