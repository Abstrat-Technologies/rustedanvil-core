// platform-lockout.js
//
// This module will check if the user is running on a 
// whitelisted platform and perform a graceful quit
// if not

// REQUIRED
const loggingUtils = require('./error-handler')
const logMsg = loggingUtils.consoleOut
const path = require('path');
const curFile = path.basename(__filename);

function checkPlatform() {
	switch (process.platform) {
		// We're running Windows
		case 'win32':
			isWindows()
			break
		// No windows :(
		default:
			isNotWindows()
			break
	}
}

function isWindows() {
	logMsg(0, "Current operating system: " + process.platform, curFile)
}

function isNotWindows() {
	logMsg(4, "The current operating system is: " + platform + ". Expected: win32", curFile)
	logMsg(4, "The process will now exit.", curFile)
	exitProcess()
}

function exitProcess() {
	// call off to the process exiter
}

function broadcastFuncs() {
	//Broadcast the avaliable functions that can be called
}

function broadcastModuleInfo() {
	// Broadcast the module info for interal module loader
	const name = "platform-lockout"
	const version = "0.0.1"
	return {name, version}
}

checkPlatform()

module.exports = {
	checkPlatform,
	broadcastFuncs,
	broadcastModuleInfo
}