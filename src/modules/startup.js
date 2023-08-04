// REQUIRED
const loggingUtils = require('./error-handler')
const logMsg = loggingUtils.consoleOut
const path = require('path');
const curFile = path.basename(__filename);

// Prep args
let argsPassed = process.argv
argsPassed = argsPassed.slice(2)

// Output the args passed recursivley 
for (let i = 0; i < argsPassed.length; i++) {
	logMsg(0, argsPassed[i], curFile)
}

/*
 * LIST OF ARGS
 *
 * --logging, -log : BOOL T/F : If logging should be enabled
 * --logging-level, -ll : INT 0-4 : The level which should be used for logging.
 * --dev-env : BOOL T/F : Whenever or not the program should use local paths for development
 * --dev-path : STR : If using dev-env, where should the files be located? "./" local, or absolute
 *
 */

for (let i = 0; i < argsPassed.length; i++) {
	if (argsPassed[i].startsWith('--logging-level=') || (argsPassed[i].startsWith('-ll'))) {
		if (argsPassed[i].startsWith('0', 16) || argsPassed[i+1].startsWith('0')) {
			// INFO
			logMsg(0, "Found info in logging decider", curFile)
		}
		else if (argsPassed[i].startsWith('1', 16) || argsPassed[i + 1].startsWith('1')) {
			// DEBUG
			logMsg(0, "Found debug in logging decider", curFile)
		}
		else if (argsPassed[i].startsWith('2', 16) || argsPassed[i + 1].startsWith('2')) {
			// WARN
			logMsg(0, "Found warn in logging decider", curFile)
		}
		else if (argsPassed[i].startsWith('3', 16) || argsPassed[i + 1].startsWith('3')) {
			// ERR
			logMsg(0, "Found error in logging decider", curFile)
		}
		else if (argsPassed[i].startsWith('4', 16) || argsPassed[i + 1].startsWith('4')) {
			// DEATH
			logMsg(0, "Found fatal in logging decider", curFile)
		}
		else {
			logMsg(4, "Something went really wrong. Send help.", curFile)
		}

	}
	else if (argsPassed[i] == '--logging' || argsPassed[i] == '-log') {
		//Logging enabled block
	}
	else if (argsPassed[i] == 0 || argsPassed[i] == 1) {
		// Dev env. This code needs more specifity
	}
	else if (argsPassed[i] == '--dev-path') {
		// Check if the path after "--dev-path" is valid
		const devPath = argsPassed[i + 1];
		if (!devPath) {
			logMsg(4, "Invalid path. Send help.", curFile);
		} 
		else {
			logMsg(1, "Debug symbol 1", curFile)
			const isValidPath = path.isAbsolute(devPath) || path.isAbsolute(path.join(process.cwd(), devPath));
			//let __TEST = path.parse(devPath)
			//logMsg(1, "Debug Symbol 2: " + __TEST.root, curFile)
			// THE SECOND PART OF THE VALID PATH ALGO IS NOT WORKING. IT CANNOT FIND RELATIVE PATH! FIX IT
			if (!isValidPath) {
				logMsg(4, "Invalid path. Send help!", curFile);
			}
		}
	}
}